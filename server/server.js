const express = require('express');
const app = express();
const port = 3000;

const Sequelize = require('sequelize');
const sequelize = new Sequelize('store', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});



app.get('/transactions/:query?', async(req, res)=>{
    const {id, startDate, endDate} = req.query;
    if(id){
        const transaction = await sequelize.query(`select * from transactions WHERE seller_id = ${id}`);
        res.send(transaction[0]);
    }else if(id && startDate && endDate){
        const transaction = await sequelize.query(`select * from transactions WHERE (seller_id = ${id} AND last_updated BETWEEN ${startDate} AND ${endDate} )`);
        res.send(transaction[0]);
    }else{
        res.send('data invalid');
    }
})

app.get('/totalIncome/:query?', async(req, res)=>{
    const {id} = req.query;
    if(id){
        const transaction = await sequelize.query(`SELECT * ,name FROM day, seller  WHERE seller_id = ${id}`);
        res.send(transaction[0]);
    }else{
        res.status(404).send('data invalid');
    }
})





app.listen(port, ()=>console.log('Now your server up to:',port));

