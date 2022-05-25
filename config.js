const config = {
  appConfig: {
    port: process.env.PORT || "5000",
    host: process.env.HOST || "0.0.0.0",
  },
  dbConfig: {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    url: process.env.DB_URL,
  },
};

module.exports = config;
