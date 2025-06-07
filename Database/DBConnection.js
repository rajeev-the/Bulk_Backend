const mongoose = require('mongoose');
require('dotenv').config();

// Replace this with your actual MongoDB URI from Railway




const connectDB = async()=>{

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,
         
             
        )
        console.log(`connection  to mongoose Database ${conn.connection.host}`)
        
    } catch (error) {
        console.log(`error in mongoose ${error}`)
        process.exit(1);  // Exit if DB connection fails
        
    }

}


module.exports = connectDB; // Export the connectDB function