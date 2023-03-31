
export class Flight {
    id: string;
    departure: string;
    destination: string;
    price: number;
    capacity: number;
    occupancy: number;
    departureDate: Date;

    public constructor(id: any, departure: any, destination: any, price: any, capacity: any, occupancy: any,
        departureDate: any) {
        this.id = id;
        this.departure = departure;
        this.destination = destination;
        this.price = price;
        this.capacity = capacity;
        this.occupancy = occupancy;
        this.departureDate = departureDate;
    }
}