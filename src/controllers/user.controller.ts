import { Request, Response } from "express";
import User, { Iuser } from "../models/user";
import jwt from 'jsonwebtoken';
import config from '../config/config'

function createToken(user:Iuser) {
    return jwt.sign({id: user.id, email:user.email}, config.jwtSecret, {
        expiresIn: 86400
    })
}

export const signUp = async (
	req: Request,
	res: Response
): Promise<Response> => {
	if (!req.body.email || !req.body.password)
		return res.status(400).json({ msg: "Missing fields" });
	if (await User.findOne({ email: req.body.email })) {
		return res.status(400).json({ msg: "Already exists." });
	}

	const newUser = new User(req.body);
	await newUser.save();

	return res.status(201).json(newUser);
};

export const signIn = async (req: Request, res: Response) => {
	if (!req.body.email || !req.body.password)
		return res.status(400).json({ msg: "Missing fields" });

	const user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(400).json({ msg: "Doesn't exists." });

    if (await user.comparePass(req.body.password)) {
        return res.status(200).json({token: createToken(user)})
	}
	
	return res.status(400).json({msg: "Invalid data, try again."})
};