import { FastifyInstance } from "fastify";
import { prisma } from '../lib/prisma'

export async function barbershopRoutes(app: FastifyInstance) {

    app.get('/barbershops', async () => {
        const barbershops = await prisma.barbershop.findMany()
        return barbershops
    })
    
}