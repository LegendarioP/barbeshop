import BarbershopItem from "@/components/barbershop-item";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {Link, SearchIcon } from "lucide-react";
import Image from "next/image";
import { api } from "@/lib/api"
import { Barbershop } from "@/data/barbershop";
import { quickSearchOptions } from "@/data/search";
import BookingItem from "@/components/booking-item";



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

        {/* BUSCA RÁPIDA */}
        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              className="gap-2"
              variant="secondary"
              key={option.title}
            >
              <Image
                src={option.imageUrl}
                width={16}
                height={16}
                alt={option.title}
              />
              {option.title}
            </Button>
          ))}
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

        <BookingItem />

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

        <h2 className="mb-3 mt-6 text-xs font-bold uppercase text-gray-400">
          Recomendados
        </h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.reverse().map(item => {
            return(
              <BarbershopItem key={item.id} barbershop={item} />
            )
          })}
        </div>

      </div>
    </div>
  );
}
