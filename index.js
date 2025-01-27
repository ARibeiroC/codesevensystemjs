import express from 'express'
import cors from 'cors'
import { Candidate } from './models/candidate.js'
import { app } from './connection.js'
// import { connection } from './db/conn.js'
import mongoose from 'mongoose'

const port = process.env.PORT || 3000

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@codesevenacademyerp.ovupv.mongodb.net/codeseven?retryWrites=true&w=majority&appName=codesevenacademyerp`
async function connection(){
    try {
        await mongoose.connect(uri)
        console.log("Conexão estabelecida")
    } catch (error) {
        console.log("Ouve um problema com a conexão", error)
    }
}

app.use(express.json())
app.use(cors(`http://localhost:${port}/`))


app.get('/', (req, res)=>{
    res.send({"msg":"Deploy funcionando"})
})

app.post('/candidates', async (req, res)=>{
    try {
        if (req.body) {
            const candidate = new Candidate({
                registerCandidate: req.body.registerCandidate,
                nameComplete: req.body.nameComplete,
                emailCandidate: req.body.emailCandidate,
                telephoneCandidate: req.body.telephoneCandidate,
                nameResponsible: req.body.nameResponsible,
                cellphoneResponsible: req.body.cellphoneResponsible,
                passwordCandidate: req.body.passwordCandidate,
                accessLevel: req.body.accessLevel
            })
    
            await candidate.save()
            console.log(candidate)
            res.send(candidate)
        } else {
            console.log(req.body)
        }
    } catch (error) {
        console.log(error)
    }
})

app.get('/candidates', async (req, res)=>{
    const candidate = await Candidate.find()
    res.send(candidate)
})

const responseServer = ()=>{
    console.log(`Servidor no ar em http://localhost:${port}`)
    connection()
}

app.listen(port, responseServer)