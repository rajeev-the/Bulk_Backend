const mongoose = require('mongoose');


// Replace this with your actual MongoDB URI from Railway




const connectDB = async()=>{

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
        
             }
        )
        console.log(`connection  to mongoose Database ${conn.connection.host}`)
        
    } catch (error) {
        console.log(`error in mongoose ${error}`)
        
    }

}


module.exports = connectDB; // Export the connectDB function