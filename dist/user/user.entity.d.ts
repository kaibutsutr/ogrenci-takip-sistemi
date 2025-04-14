export declare class User {
    id: number;
    admin: boolean;
    email: string;
    password: string;
    name: string;
    surname: string;
    phone: string;
    registration_date: Date;
    insertLog(): void;
    removeLog(): void;
    updateLog(): void;
}
