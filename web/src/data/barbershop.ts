interface BarbershopServices {
    id:          string,         
    name:        string,
    description: string,
    imageUrl:    string,
    price:       number,
    barbershopId: string
}


export interface Barbershop {
    id:          string,         
    name:        string,
    address:     string,
    phones:      string[],
    description: string,
    imageUrl:    string,
    createdAt:   Date,            
    updatedAt:   Date,
    services: BarbershopServices[]
}