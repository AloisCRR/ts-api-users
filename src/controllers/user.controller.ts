import { Request, Response } from 'express'
import  User,{ Iuser } from '../models/user'

export const signUp = async (req: Request, res: Response): Promise<Response> => {
    if (!req.body.email || !req.body.password) return res.status(400).json({msg: 'Missing fields'});
    if (await User.findOne({email: req.body.email})) {
        return res.send('Already exists.')
    }

    const newUser = new User(req.body)
    await newUser.save()

    return res.status(200).json(newUser)
}

export const signIn = (req: Request, res: Response) => {
    res.send('signIn');
}