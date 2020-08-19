import * as dotenv from 'dotenv';
import * as path from 'path';

const NODE_ENV = process.env.NODE_ENV || 'local';

const envPath = path.join(__dirname, '../..', `.env.${NODE_ENV}`);

dotenv.config({
    path: envPath
})
export const FB_ID = process.env.FB_ID;
export const FB_SECRET = process.env.FB_SECRET;