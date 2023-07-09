import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'

const app = express();
app.use(express.json({limit:"30mb", extended:true}))

// So, json hamne use kia kyuki we will receive everything in jason format, limit 30mb ka set kia which can be extended

app.use(express.urlencoded({limit:"30mb", extended:true}))
app.use(cors());

app.get('/', (req, res)=> {
    res.send("This is a stack overflow clone API")
})

const PORT = process.env.PORT || 5000

const CONNECTION_URL = "mongodb+srv://prakharshankar247:mercury29@stack-overflow-clone.otoaqo3.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() =>app.listen(PORT, () => {console.log(`server is running on ${PORT}`)}))
    .catch((err) =>  console.log(err.message))
