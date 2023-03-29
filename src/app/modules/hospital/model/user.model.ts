export class User {

    Username: string = '';
    Name: string = '';
    Lastname: string = '';
    Role: any = null;
    Password: string = '';
    Email: string = ''; 
    PlaceOfLiving: string = '';
 
    public constructor(obj?: any) {
        if (obj) {
            this.Username = obj.Username;
            this.Name = obj.Name;
            this.Lastname = obj.Lastname;
            this.Role = obj.Role;
            this.Password = obj.Password;
            this.Email = obj.Email;
            this.PlaceOfLiving = obj.PlaceOfLiving;
        }
    }
}
