import express from 'express';

const app=express();
const PORT=process.env.PORT || 3000;

//middlewares necesarios
app.use(express.json());

app.use(express.urlencoded({extended:true}));

//Ruta de prueba inicial
app.get('/',(req, res)=>{
    res.json({mensaje: 'Servidor express MVC funcionando'})
});