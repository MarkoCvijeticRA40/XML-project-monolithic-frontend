export class LoginData {
    
    Email: string = '';
    Password: string = '';

    public constructor(obj?: any) {
        if (obj) {
            this.Email = obj.Email;
            this.Password = obj.Password;
        }
    }
}