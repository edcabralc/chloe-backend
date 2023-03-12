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

const getById = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const list = await Room.findByPk(id)
        if (!list) {
            throw new Error('Acomodação não encontrada')
        }
    } catch ({ message }) {
        return res.status(404).json({ error: message })
    }
}
