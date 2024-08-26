import { BarbershopServices } from "@/data/barbershop";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";
import { Button } from "./ui/button";

interface ServiceItemProps {
    service: BarbershopServices
}
export default function ServiceItem({ service }: ServiceItemProps){
    return(
        <Card>
            <CardContent className="flex items-center gap-3 p-3">
                <div className="relative max-h-[6.875rem] max-w-[6.875rem]  min-h-[6.875rem] min-w-[6.875rem]">
                    <Image 
                        src={service.imageUrl}
                        alt={service.name}
                        fill
                        className="object-cover rounded-lg"   
                    />
                </div>

                <div className="space-y-2">
                    <h3 className="text-sm font-semibold">{service.name}</h3>
                    <p className="text-sm text-gray-400">{service.description}</p>
                    {/* PREÇO E BOTÃO */}
                    <div className="flex items-center justify-between">
                        <p className="text-sm font-bold text-primary">
                            {Intl.NumberFormat("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                            }).format(Number(service.price))}
                        </p>
                        <Button variant="secondary" size="sm">
                            Reservar
                        </Button>
                    </div>
                </div>

            </CardContent>
        </Card>
    )
}