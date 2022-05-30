export class User {
    constructor(
        public name: string,
        public email: string,
        public phone: number,
        public subject: string,
        public timePreference: string,
        public terms: boolean,
    ){}
}
