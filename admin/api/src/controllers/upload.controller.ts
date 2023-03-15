import { Response, Request } from 'express'

export const sendFile = (req: Request, res: Response) => {
    return res.json({ message: 'Uploado realizado com sucesso' })
}

// sendFiles
