import { Request, Response } from 'express'
import { User } from '../models/User'

export const getAll = async (req: Request, res: Response) => {
    try {
        const list = await User.findAll()
        if (list) {
            res.json({ list })
        }
    } catch ({ message }) {
        res.status(404).json({ message: message })
    }
}

export const getById = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const list = await User.findByPk(id)
        if (!list) {
            throw new Error('Usuário não encontrado')
        }
        return res.json({ list })
    } catch ({ message }) {
        res.status(404).json({ error: message })
    }
}

export const editById = async () => {}

export const deleteById = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const list = await User.destroy({ where: { id } })
        if (!list) {
            throw new Error('Usuário não encontrado')
        }
        return res.json({ message: 'Usuário excluido com sucesso' })
    } catch ({ message }) {
        res.status(404).json({ error: message })
    }
}
