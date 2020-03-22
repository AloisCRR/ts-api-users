import { Strategy, ExtractJwt, StrategyOptions } from "passport-jwt";
import config from "../config/config";
import Users from "../models/user";

export default new Strategy(
	{
		jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
		secretOrKey: config.jwtSecret
	},
	async (payload: any, done: any) => {
		try {
			const user = Users.findById(payload.id);
			if (user) return done(null, user);
			return done(null, false);
		} catch (error) {
			console.error(error);
		}
	}
);
