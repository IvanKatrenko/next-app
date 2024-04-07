export type Company = {
    id: string 
    companyName: string
    worth: number
    madeAt: string
    owners: {
        firstname: string
        surname: string
        dateOfBirth: string
    }[]
}
