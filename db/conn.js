import mongoose from "mongoose"

const connection = async ()=>{
    const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@codesevenacademyerp.ovupv.mongodb.net/codeseven?retryWrites=true&w=majority&appName=codesevenacademyerp`

    try {
        await mongoose.connect(uri)
        console.log('Conexão estabelecida!')
    } catch (error) {
        console.log('Ouve um problema ao tentar estabelecer uma conexão com o banco de dados, favor tentar novamente!', `Erro: ${error}`)
    }

}

export {connection}