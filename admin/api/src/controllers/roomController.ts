import { Request, Response } from 'express'
import { Room } from '../models/Room'

export const all = async (req: Request, res: Response) => {
    try {
        const list = await Room.findAll()
        res.json({ list })
    } catch (error) {
        res.status(404).json({ message: error })
    }
}
