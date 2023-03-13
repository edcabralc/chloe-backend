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

export const getById = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const list = await Room.findByPk(id)
        if (!list) {
            throw new Error('Acomodação não encontrada')
        }
        return res.json({ list })
    } catch ({ message }) {
        res.status(404).json({ error: message })
    }
}
export const editById = async (req: Request, res: Response) => {
    const { id } = req.params
    const { tipo, status, descricao, preco, imagem } = req.body

    try {
        const list = await Room.findByPk(id)
        if (!list) {
            throw new Error('Usuário não encontrado')
        }

        list.tipo = tipo
        list.status = status
        list.descricao = descricao
        list.preco = preco
        list.imagem = imagem
        await list.save()

        return res.json({ message: list })
    } catch ({ message }) {
        return res.status(404).json({ error: message })
    }
}

export const deleteById = async (req: Request, res: Response) => {
    const { id } = req.params
    try {
        const list = await Room.destroy({ where: { id } })
        if (!list) {
            throw new Error('Acomodação não encontrada')
        }
        return res.json({ message: 'Acomodação excluida com sucesso' })
    } catch ({ message }) {
        res.status(404).json({ error: message })
    }
}
