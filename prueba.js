


const express = require('express');

const mongoose= require('mongoose');


mongoose.connect('mongodb+srv://camilomanco2005:v6ZWgy5WkuGWDl5P@camilo.lfzjq3i.mongodb.net/');

const db= mongoose.connection;

db.on('error', console.error.bind(console,'conetion error'));

db.once('open', function () {
    console.log('conected')
    const userSchema = mongoose.Schema({
        nombre: String,
        apellido:String  
    })
    
    const User = mongoose.model('company',userSchema);

    const app = express();
    app.use(express.json());


    app.get('/api/pepe', async (req, res)=> {
        const users = await User.find();
        res.json(users);
    })

    app.listen(3000, ()=>{
        console.log('servidor en el puerto 3000');
    })
})



