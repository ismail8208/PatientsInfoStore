export class PatientCommand {
    constructor(
        public id?: string,
        public name?: string,
        public fileNo?: number,
        public citizenId?: string,
        public birthdate?: Date,
        public gender?: number,
        public natinality?: string,
        public phoneNumber?: string,
        public email?: string,
        public country?: string,
        public city?: string,
        public street?: string,
        public address1?: string,
        public address2?: string,
        public contactPerson?: string,
        public contactRelation?: string,
        public contactPhone?: string,
        public firstVisitDate?: Date
    ) { }
}