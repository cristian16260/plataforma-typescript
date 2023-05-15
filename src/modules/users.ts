import mongoose, { Schema } from "mongoose";
import bcrypt from 'bcryptjs'
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
        select: false,
        minLength: [5, 'minimum 5 characters'],
        required: true
    },
    role: {
        type: String,
        enum: ['admin' , 'user'],
        default: 'user'
    }
})

userschema.pre('save', async function (next) {
    if (!this.isModified('password')) return next()
    this.password = await bcrypt.hash(this.password, 12)
    this.passwordConfirm = await  bcrypt.hash(this.password, 12)
    next();
  });

export const Users = mongoose.model('Users',userschema)