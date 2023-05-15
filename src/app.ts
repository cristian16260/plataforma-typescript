import express from 'express'
import mongoose from 'mongoose'
import userrouter from './routers/routeruser'
import dotenv from 'dotenv';
dotenv.config({
    path: '../.env',
});

const app = express()
const PORT = process.env.PORT || 3000

const database = String(process.env.MONGODB_URI || 'mongo');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api/v1/user',userrouter)

const mongodb = () => {
    mongoose.connect(database)
    console.log('database open')
}
mongodb()

app.listen(PORT, () => {
    console.log(`app listen ${PORT}`)
})

