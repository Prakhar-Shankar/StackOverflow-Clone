import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express;
app.use(express.json({limit:"30mb", extended:true}))

// So, json hamne use kia kyuki we will receive everything in jason format, limit 30mb ka set kia which can be extended

app.use(express.urlencoded({limit:"30mb", extended:true}))
app.use(cors());

app.get('/', (req, res)=> {
    res.send("This is a stack overflow clone API")
})

const PORT = process.env.PORT || 5000
