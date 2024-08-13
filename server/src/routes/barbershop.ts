import { FastifyInstance } from "fastify";
import { prisma } from '../lib/prisma'
import { z } from "zod";

export async function barbershopRoutes(app: FastifyInstance) {

    app.get('/barbershops', async () => {
        const barbershops = await prisma.barbershop.findMany()
        return barbershops
    })

    app.get('/barbershop/:id', async (request) => {

        const paramsSchema = z.object({
            id: z.string().uuid()
        })

        const { id } = paramsSchema.parse(request.params)


        const barbershop = await prisma.barbershop.findFirstOrThrow({
            where: {
                id,
            },
            include: {
                services: true,
            },
        })
        return barbershop
    })

    
    
}