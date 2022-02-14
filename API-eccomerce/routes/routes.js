const express = require('express');
const routes = express.Router();
const services = require('../models/Services');
const contact = require('../models/Contact')



routes.get('/',(req, res) =>{
    services.findAll().then((data)=>{
        return res.json({
            data
        });
    }).catch(()=>{
        res.status(400).json({
            error:true,
            mensagem:'error: nenhum valor encontrado para service'
        })
    })
});

routes.get('/contact',(req, res) =>{
    contact.findAll().then((data)=>{
        return res.json({
            data
        });
    }).catch(()=>{
        res.status(400).json({
            error:true,
            mensagem:'error: nenhum valor encontrado para service'
        })
    })
});

routes.post('/add-service', async(req,res)=>{
    const dataservice = await services.findOne();


    await services.create(req.body).then(()=>{
        return res.json({
            
            mensagem:"Dados cadastrados com sucesso"
        });
    }).catch(()=>{
        return res.status(400).json({
            
            mensagem:"dados não cadastrados"
        })
    })
})

routes.post('/add-contact', async(req,res)=>{
    
    await contact.create(req.body).then(()=>{
        return res.json({
            
            mensagem:"Dados cadastrados com sucesso"
        });
    }).catch(()=>{
        return res.status(400).json({
            
            mensagem:"dados não cadastrados"
        })
    })
})
module.exports = routes;