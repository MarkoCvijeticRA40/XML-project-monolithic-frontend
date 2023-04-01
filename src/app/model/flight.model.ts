export class Flight {

  id: string = "";
  departure : string = '';
  destination : string = '';
  price: number = 0;
  capacity: number = 0;
  occupancy: number = 0;
  departureDate: Date = new Date()

  constructor(obj?: any) {
    if (obj) {
      this.id = obj.id;
      this.departure = obj.departure;
      this.destination = obj.destination;
      this.price = obj.price;
      this.capacity = obj.capacity;
      this.occupancy = obj.occupancy;
      this.departureDate = obj.departureDate;
    }
  }
}
