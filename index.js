import express from 'express'
import cors from 'cors'
import { Candidate } from './models/candidate.js'
import { app } from './connection.js'
import { connection } from './db/conn.js'

const port = process.env.PORT || 3000

app.use(express.json())
app.use(cors(`http://localhost:3000/`))


connection()

app.get('/', (req, res)=>{
    res.send({"msg":"Deploy funcionando"})
})

app.post('/candidates', async (req, res)=>{
    try {
        const candidate = new Candidate({
            registerCandidate: req.body.registerCandidate,
            nameComplete: req.body.nameComplete,
            emailCandidate: req.body.emailCandidate,
            telephoneCandidate: req.body.telephoneCandidate,
            nameResponsible: req.body.nameResponsible,
            cellphoneResponsible: req.body.cellphoneResponsible,
            passwordCandidate: req.body.passwordCandidate,
        })

        await candidate.save()
        res.send(candidate)
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
}

app.listen(port, responseServer)