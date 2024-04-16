

// export type NotificationType = 'success' | 'error' | 'info' | 'warning';

type NotificationType = {
    id: string;
    companyName: string
    worth: number
    madeAt: string
    owners: {
        firstname: string
        surname: string
        dateOfBirth: string
    }[]

    type: 'success' | 'error' | 'info' | 'warning'

}

// to co zwraca context (what context returns)
type NotificationOutput = {
    notifications: NotificationType[];
    id: string;
    companyName: string
    worth: number
    madeAt: string
    owners: {
        firstname: string
        surname: string
        dateOfBirth: string
    }[]
}