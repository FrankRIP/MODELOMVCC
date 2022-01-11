const express = require('express');
const router = express.Router();
const model = require('../model/valores')();

const Valor = require('../model/valores')

router.get('/', async (req, res) => {
    //para que haga barridos de todos los valores almacenados
    const valores = await Valor.find();
    //para que imprima los valores
    console.log(valores);
    res.render('index.ejs', {
        valores
    });
});

router.post('/add', async(req, res) => {
    const valor = new Valor(req.body);
    await valor.save();
    res.redirect('/');
});
module.exports = router;