const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

const RegisterModel = require('./models/Register')

app.use(express.json())
app.use(cors());

mongoose.connect(
    'mongodb+srv://datauser:Pokilo29@ujian8-cluster.ui7b8.mongodb.net/register?retryWrites=true&w=majority',
     { 
    useNewUrlParser: true,
    }
);

app.post('/input', async (req, res) =>{
        
        const username = req.body.username
        const email = req.body.email
        const phone = req.body.phone
        const address = req.body.address
        
        
        
        
        const register = new RegisterModel({username: username, email: email, phone: phone, address: address});
        


        try{
          await register.save()
        } catch(err){
            console.log(err);
        }
})


app.get('/read', async (req, res) =>{
 RegisterModel.find({}, (err, result) => {
     if (err){
         res.send(err);
     }

     res.send(result);
 })       
  
})

app.listen(3001, ()=>{
    console.log('Server running on port 3001')
})