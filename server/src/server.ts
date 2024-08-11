import fastify from "fastify";


const app = fastify()


app.get('/hello', () => {
    return 'Hello World'
})



app.listen({
    port: 3333,
}).then(() => {
    console.log("server running on port htttp://localhost:3333")
})