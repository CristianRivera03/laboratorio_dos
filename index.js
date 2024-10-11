import express from "express";
import cors from "cors"
import UserRoute from "./routes/UserRoute.js"

// we´ll create our server
const app = express();
// become json response
app.use(express.json())

// hability the cors
app.use(cors())


// define a port
const PORT = process.env.port ?? 3000;

app.use(UserRoute)

// running server

app.listen(PORT, ()=>{
    console.log("server running at the port " + PORT)
})