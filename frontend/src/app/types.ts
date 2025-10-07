export interface Task {
    _id: string;
    title: string;
    description: string;
    status: boolean;
    createdAt: Date;
    updatedAt: Date;
}
