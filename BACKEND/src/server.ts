/**IMPORTANT HELMET DONT ALLOWS TO SEND IMAGES FROM BACKEND TO FRONTEND USING MULTER ****/


/**express is imported as the main framework for building the web application.*/
import express from 'express';
/**The Path module provides a way of working with directories and file paths. */
import path from 'node:path';
/***CORS in node. js stands for Cross-Origin Resource Sharing. It is a mechanism by which resources are shared across different servers. */
/**cors is imported to enable Cross-Origin Resource Sharing. */
//import cors from 'cors'; 
//For connecting Backend with frontend
import cors from './middleware/cors';
/**Morgan is another HTTP request logger middleware for Node. js. It simplifies the process of logging requests to your application. */
import morgan from 'morgan';
import sanitizedConfig from './config/config';
import connectDb from './config/db';
import productRoutes from './routes/productRoutes';
import userRoutes from './routes/userRoutes';
import orderRoutes from './routes/orderRoutes';
import uploadRoutes from './routes/uploadRoutes';
import { errorHandler, notFound } from './middleware/errorMiddleware';
import { Server } from 'http';
const PORT: number | string = sanitizedConfig.PORT || 9000;
connectDb();

const app = express();

if (sanitizedConfig.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.json({ message: "Welcome to redux toolkit crud node and express and mongodb application." });
  });

  app.use('/api/products', productRoutes);
  app.use('/api/users', userRoutes);
  app.use('/api/orders', orderRoutes);
  app.use('/api/uploads', uploadRoutes);

  console.log("Estoy en Server line - 71 , voy a /uploads");
  console.log("Estoy en Server line - 72, (path.resolve(__dirname,'uploads')): "+(path.resolve(__dirname,'..','uploads')))
  app.use('/uploads', express.static(path.resolve(__dirname,'..','uploads/')));
  
  app.use(notFound);
  app.use(errorHandler);

  const server: Server = app.listen(PORT, () =>
  console.log(
    `🟢 Server running in ${sanitizedConfig.NODE_ENV} mode on port ${PORT}`
  )
);