import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import morgan from 'morgan';

dotenv.config();

connectDB();

const app = express();

// Middleware for logging requests
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Body parser middleware to handle JSON data
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API is running...');
});

// Product Routes
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
