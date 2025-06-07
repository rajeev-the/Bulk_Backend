// index.js
const express = require('express');
const app = express();
// const connectDB = require('./Database/DBConnection.js'); // Uncomment if you use a database
// const UserRoutes = require('./Router/UserRoutes.js');
const cors = require('cors');
const categoryRoutes = require('./Router/categoryRoutes.js');
require('dotenv').config();

app.use(express.json());
app.use(cors());

app.use('/api/category', categoryRoutes);

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

const PORT = process.env.PORT || 8080;

// Start the server and keep a reference to the server instance
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// --- Graceful Shutdown Handling ---
// Listen for SIGTERM signal (sent by platforms like Railways during deployment)
process.on('SIGTERM', () => {
  console.log('SIGTERM signal received. Shutting down gracefully...');

  // Close the Express server
  server.close((err) => {
    if (err) {
      console.error('Error during server close:', err);
      process.exit(1); // Exit with error
    }
    console.log('HTTP server closed.');

    // If you have a database connection, close it here as well.
    // Example:
    // if (connectDB) {
    //   mongoose.connection.close(() => {
    //     console.log('Database connection closed.');
    //     process.exit(0); // Exit successfully after all cleanup
    //   });
    // } else {
    //   process.exit(0); // No DB to close, just exit
    // }

    // For now, without DB connection, just exit successfully
    process.exit(0);
  });

  // Optional: Force shutdown after a timeout if graceful shutdown takes too long
  setTimeout(() => {
    console.error('Forcing shutdown after 10 seconds due to timeout.');
    process.exit(1); // Exit with error code
  }, 10000); // 10 seconds
});

// Listen for SIGINT signal (Ctrl+C in development)
process.on('SIGINT', () => {
  console.log('SIGINT signal received. Shutting down gracefully...');
  server.close((err) => {
    if (err) {
      console.error('Error during server close:', err);
      process.exit(1);
    }
    console.log('HTTP server closed.');
    // Close DB connection here if applicable
    process.exit(0);
  });
  setTimeout(() => {
    console.error('Forcing shutdown after 10 seconds due to timeout.');
    process.exit(1);
  }, 10000);
});