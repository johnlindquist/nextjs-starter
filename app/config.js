const PORT = parseInt(process.env.PORT, 10) || 3000;
const IS_DEV = process.env.NODE_ENV !== 'production';
const API_URL = process.env.API_URL || (IS_DEV ? 'https://api-dev.me.io' : 'https://api-dev.me.io');

process.env.PORT = PORT;
process.env.API_URL = API_URL;
process.env.IS_DEV = IS_DEV;

export { PORT, IS_DEV, API_URL };
