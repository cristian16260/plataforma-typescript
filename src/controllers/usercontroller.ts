import { Users } from '../modules/users'
import { Request, Response } from 'express'

export const register = async (req: Request, res: Response) => {
    try {
        const {name, last_name, dni, email, carrera, password, passwordConfirm} = req.body

        const user = new Users({
            name, 
            last_name, 
            dni, 
            email, 
            carrera, 
            password, 
            passwordConfirm,
        })
        await user.save()
        res.json({
            status: 'success',
            message: 'User successfully registered',
            data: [{
                name,
                last_name,
                email,
            }]
        })
        } catch (error) {
            res.status(404).json(error)
        }
}

export const listuser = async (req: Request,res: Response) => {
    try {
            const users = await Users.find()
    res.status(200).json({
        status: 'success',
        count: users.length,
        data: users
    })
    } catch (error) {
        res.status(404).json(error)
    }

}

export const deleteuser = async (req: Request, res: Response) => {
    try {
        const { email } = req.body
        await Users.deleteOne({email})
        res.json({
            status: 'success',
            message: `the user ${email} removed`
        })
    } catch (error) {
        res.status(404).json(error)
    }
}

export const updateuser = async (req: Request, res: Response) => {
    try {
        const {_id, name, last_name, dni, email, carrera, password, passwordConfirm} = req.body

        const user = await Users.findOneAndUpdate({ _id },{
            name,
            last_name,
            dni,
            email,
            carrera,
            password,
            passwordConfirm,
        },
        { new:true })

        res.json({
            status: 'success',
            message: `the user ${email} updated`,
            data: [{
                name,
                last_name,
                dni,
                email,
                carrera
            }]
        })
    } catch (error) {
        res.status(404).json(error)
    }
}