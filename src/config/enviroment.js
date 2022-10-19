import * as dotenv from 'dotenv';

dotenv.config()

export const environment = {
    PORT: parseInt(process.env.PORT || 8080),
    MONGODB_HOST: process.env.MONGODB_HOST,
    JWT_SECRET: process.env.JWT_SECRET || 'secret',
    JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
    HASH_SALT: parseInt(process.env.HASH_SALT || '2')
};