module.exports = {
  HOST: process.env.MYSQL_HOST || "127.0.0.1",
  PORT: process.env.MYSQL_PORT  || "3306",
  USERNAME: process.env.MYSQL_USERNAME || "admin" ,
  PASSWORD: process.env.MYSQL_PASSWORD || "Auti2316" ,
  DATABASE: process.env.MYSQL_DATABASE || "tastylog" ,
  //三項演算子 var1 ? var2 : var3
  CONNECTION_LIMIT: process.env.MYSQL_CONNECTION_LIMIT ?
    parseInt(process.env.MYSQL_CONNECTION_LIMIT) : 10, 
  QUEUE_LIMIT: process.env.MYSQL_QUEUE_LIMIT ?
    parseInt(process.env.MYSQL_QUEUE_LIMIT) : 0
} ;