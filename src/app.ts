import express,{ Request, Response } from 'express'
import mongoose from 'mongoose'
import userrouter from './routers/routeruser'

const app = express()
let port: number = 3000

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/v1/user',userrouter)

const mongodb = () => {
    mongoose.connect('mongodb+srv://cmrcristian26:passwordmongo98@cluster0.wwavevr.mongodb.net/plataforma')
    console.log('connect mongo')
}
mongodb()

app.listen(port, () => {
    console.log(`app listen ${port}`)
})

