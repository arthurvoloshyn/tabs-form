const { NODE_ENV } = process.env;

const env = {
  isProd: NODE_ENV === 'production',
  isDev: NODE_ENV === 'development',
};

export default env;
