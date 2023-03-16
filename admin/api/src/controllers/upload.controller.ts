import { Response, Request } from 'express'

export const sendFile = (req: Request, res: Response) => {
    console.log(req.file)
    return res.json({ message: 'Uploado realizado com sucesso' })
}

export const sendFiles = (req: Request, res: Response) => {}
