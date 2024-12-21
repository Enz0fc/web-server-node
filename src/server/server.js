
import express from 'express'
import path from'path'

export const startServer = (option) => {
    const {port, public_path = 'public'} = option
    console.log(port)
    console.log(public_path)

    const app = express()
    //para poder usar middlewares se usa la palabra use, propio de express
    app.use(express.static(public_path)) //contenido estatico disponible para usar

    app.get('*',(req,res)=>{
        const indexPath = path.join(`../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    })
    app.listen(port, () =>{
        console.log(`Escuchando en el pureto ${port}`)
    })
}

