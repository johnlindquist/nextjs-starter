const PORT = parseInt(process.env.PORT, 10) || 3000;
const IS_DEV = process.env.NODE_ENV !== 'production';

process.env.PORT = PORT;
process.env.IS_DEV = IS_DEV;

export { PORT, IS_DEV };
