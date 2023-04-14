import { Response, Request } from 'express'

export const sendFile = (req: Request, res: Response) => {
    const file = req.file
    // console.log(req.file)
    console.log('Esse é o nome do arquivo?', file?.filename)
    return res.json({ message: 'Uploado realizado com sucesso' })
}

export const sendFiles = (req: Request, res: Response) => {}

// export const createUser = async (req: Request, res: Response) => {
//     const { nome_usuario, email_usuario, password } = req.body
//     try {
//         if (nome_usuario === '' && email_usuario === '' && password === '') {
//             res.status(400)
//             throw new Error('Não foi possível cadastrar o usuário')
//         }

//         const newUser = User.build({ nome_usuario, email_usuario, password })

//         await newUser.save()

//         return res
//             .status(201)
//             .json({ message: 'Usuário cadastrado com sucesso', id: newUser.id, nome: newUser.nome_usuario, email: newUser.email_usuario })
//     } catch ({ message }) {
//         return res.status(400).json({ error: message })
//     }
// }
