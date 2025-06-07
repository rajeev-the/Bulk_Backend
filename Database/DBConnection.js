const mongoose = require('mongoose');


// Replace this with your actual MongoDB URI from Railway




const connectDB = async()=>{

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,
            { useNewUrlParser: true, useUnifiedTopology: true }
        
             
        )
        console.log(`connection  to mongoose Database ${conn.connection.host}`)
        
    } catch (error) {
        console.log(`error in mongoose ${error}`)
        process.exit(1);  // Exit if DB connection fails
        
    }

}


module.exports = connectDB; // Export the connectDB function