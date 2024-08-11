import BarbershopItem from "@/components/barbershop-item";
import Header from "@/components/header";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { api } from "@/lib/api"
import { Barbershop } from "@/data/barbershop";



export default async function Home() {

  const responseBarbershops = await api.get('/barbershops')
  const barbershops: Barbershop[] = responseBarbershops.data

  return (
    <div>
      <Header />
      <div className="p-5">

        {/* TEXTO */}
        <h2 className="font-xl font-bold ">Olá, Felipe!</h2>
        <p>Domingo, 11 de agosto.</p>

        {/* BUSCA */}
        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca...." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* IMAGEM */}
        <div className="relative w-full h-[9.375rem] mt-6">
          <Image 
            alt="Agende nos melhores do FSW Barber" 
            src="/banner-01.png" 
            fill 
            className="object-cover rounded-xl" />
        </div>

        {/* AGENDAMENTO */}

        <h2 className="mb-3 mt-6 uppercase text-gray-400 text-xs font-bold"> AGENDAMENTOS </h2>

        <Card>
          <CardContent className="flex justify-between p-0">
            {/* ESQUERDA */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3>Corte de Cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png" />
                </Avatar>
                <p className="text-sm">Barbearia FSW</p>
              </div>
            </div>

            {/* DIREITA */}
            
            <div className="flex flex-col items-center justify-center border-l-2 border-solid px-5">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:00</p>
            </div>

          </CardContent>

        </Card>

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map(item => {
            return(
              <BarbershopItem key={item.id} barbershop={item} />
            )
          })}
        </div>

      </div>
    </div>
  );
}
