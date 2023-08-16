export class CreatePatientCommand {
    constructor(
        public Name?: string,
        public FileNo?: number,
        public CitizenId?: string,
        public Birthdate?: Date,
        public Gender?: number,
        public Natinality?: string,
        public PhoneNumber?: string,
        public Email?: string,
        public Country?: string,
        public City?: string,
        public Street?: string,
        public Address1?: string,
        public Address2?: string,
        public ContactPerson?: string,
        public ContactRelation?: string,
        public ContactPhone?: string,
        public FirstVisitDate?: Date
    ) { }
}