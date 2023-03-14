import { Model, DataTypes } from 'sequelize'
import { sequelize } from '../instances/mysql'

export interface UserInstance extends Model {
    id: number
    nome_usuario: string
    email_usuario: string
    password: string
    nivel: string
    status: string
}

export const User = sequelize.define<UserInstance>(
    'User',
    {
        id: { primaryKey: true, autoIncrement: true, type: DataTypes.INTEGER },
        nome_usuario: { defaultValue: false, type: DataTypes.STRING },
        email_usuario: { defaultValue: false, type: DataTypes.STRING },
        password: { defaultValue: false, type: DataTypes.STRING },
        nivel: { defaultValue: false, type: DataTypes.STRING },
        status: { defaultValue: false, type: DataTypes.STRING },
    },
    {
        tableName: 'usuario',
        timestamps: true,
    }
)
