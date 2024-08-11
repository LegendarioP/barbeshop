import fastify from "fastify";
import cors from '@fastify/cors'
import { barbershopRoutes } from "./routes/barbershop";


const app = fastify()


app.register(barbershopRoutes)

app.register(cors, {
    origin: true
})



app.listen({
    port: 3333,
}).then(() => {
    console.log("server running on port htttp://localhost:3333")
})