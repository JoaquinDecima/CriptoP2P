import { environment } from './enviroment.js';
import mongoose from 'mongoose';

// MongoDB connection
mongoose.connect(environment.MONGODB_HOST);

