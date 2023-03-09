import { Request, Response } from 'express'
import { User } from '../models/User'

export const all = async (req: Request, res: Response) => {
    try {
        const list = await User.findAll()
        res.json({ list })
    } catch (error) {
        res.status(404).json({ message: error })
    }
}
