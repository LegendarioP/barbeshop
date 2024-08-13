import { api } from "@/lib/api"
import { Barbershop } from "@/data/barbershop";





export default async function BarbershopPage({ params }: any) {

    const barbershopData = await api.get(`/barbershop/${params.id}`)

    const barbershop: Barbershop = barbershopData.data
    console.log(barbershop)

    // console.log(params)
    return (<h1> {params.id}</h1>)
}