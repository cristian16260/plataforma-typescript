import mongoose, { Schema } from "mongoose";

const userschema = new Schema({
    name: {
        type: String,
        minLength: [2, 'minimum 2 characters'],
        maxLength: [25, 'maximum 25 characters'],
        match: [/^[a-zA-Z ]+$/, 'el nombre debe tener solo letras'],
        required: true
    },
    last_name:{
        type: String,
        minLength: [2, 'minimum 2 characters'],
        maxLength: [25, 'maximum 25 characters'],
        match: [/^[a-zA-Z ]+$/, 'el nombre debe tener solo letras'],
        required: true
    },
    dni: {
        type: Number,
        unique: true,
        required: true
    },
    email: {
        type: String,
        match: [/\S+@\S+\.\S+/, 'the email must be: ejemplo@email.com'],
        required: true
    },
    carrera: {
        type: String,
        minLength: [2, 'minimum 2 characters'],
        maxLength: [25, 'maximum 25 characters'],
        match: [/^[a-zA-Z ]+$/, 'el nombre debe tener solo letras'],
        required: true
    },
    password: {
        type: String,
        minLength: [5, 'minimum 5 characters'],
        required: true
    },
    passwordConfirm: {
        type: String,
        minLength: [5, 'minimum 5 characters'],
        required: true
    },
    role: {
        type: String,
        enum: ['admin' , 'user'],
        default: 'user'
    }
})



export const Users = mongoose.model('Users',userschema)