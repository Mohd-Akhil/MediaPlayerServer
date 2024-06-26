//1) import json server (it is the library)
const jsonServer = require('json-server')

//2) create path for database.json file using router function for storing data
const router = jsonServer.router("database.json")

//3) create middleware to convert json to js - defaults() - (to convert the language into server understanding language)
const middleware = jsonServer.defaults()

//4) create json server (this creates the server)
const MPServer = jsonServer.create()

//5) server should use middleware and router
MPServer.use(middleware)
MPServer.use(router)

//6) set port for server
const PORT = 3000 || process.env.PORT    // process.env.port - is used to avoid clashing of servers in the same platforms - helps to choose the available ports

//7) run server
MPServer.listen(PORT,()=>{
    console.log(`server running successfully at port number ${PORT}`);
})