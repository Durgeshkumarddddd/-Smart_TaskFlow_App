import { TaskPriority } from "../task-priority";
import { TaskStatus } from "../task-status";

export interface TaskRequest {
    title: string;
    description: string;
    dueDate: string;
    status: TaskStatus;
    assignedTo?: number;
    priority?: TaskPriority;
}