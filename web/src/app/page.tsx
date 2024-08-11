import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="font-xl font-bold ">Olá, Felipe!</h2>
        <p>Domingo, 11 de agosto.</p>

        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Faça sua busca...." />
          <Button>
            <SearchIcon />
          </Button>
        </div>


        <div className="relative w-full h-[9.375rem] mt-6">
          <Image 
            alt="Agende nos melhores do FSW Barber" 
            src="/banner-01.png" 
            fill 
            className="object-cover rounded-xl" />
        </div>
      </div>
    </div>
  );
}
