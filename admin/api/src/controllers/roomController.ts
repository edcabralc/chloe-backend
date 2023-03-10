import { Request, Response } from 'express'
import { Room } from '../models/Room'

export const getAll = async (req: Request, res: Response) => {
    try {
        const list = await Room.findAll()
        res.json({ list })
    } catch (error) {
        res.status(404).json({ message: error })
    }
}

export const getById = async (req: Request, res: Response) => {}
export const editById = async (req: Request, res: Response) => {}
export const deleteById = async (req: Request, res: Response) => {}
