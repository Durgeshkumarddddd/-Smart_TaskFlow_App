import { TaskPriority } from "../task-priority";
import { TaskStatus } from "../task-status";
import { User } from "../user/user.modal";

export interface Task {
    id: number;
    title: string;
    description: string;
    dueDate: string;
    status: TaskStatus;
    createdAt: string;
    updatedAt: string;

    assignee?: User;
    priority?: TaskPriority;
}