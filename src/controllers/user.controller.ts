import { Request, Response } from 'express'

export const signUp = (req: Request, res: Response) => {
    res.send('signUp');
}

export const signIn = (req: Request, res: Response) => {
    res.send('signIn');
}