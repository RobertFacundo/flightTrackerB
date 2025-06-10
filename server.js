import 'dotenv/config';
import app from './app.js';
import sequelize from './config/database.js';

const PORT = process.env.PORT || 4000;

try{
    await sequelize.authenticate();
    console.log('DB connection successfull')
}catch(error){
    console.error('connection failed')
}

app.listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`)
})