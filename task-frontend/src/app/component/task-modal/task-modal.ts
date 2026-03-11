import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task } from '../../models/task/task-response.model';
import { TaskStatus } from '../../models/task-status';
import { Comment } from '../../models/comment/comment-model';
import { CommentService } from '../../service/comment/comment-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-modal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './task-modal.html',
  styleUrl: './task-modal.css',
})
export class TaskModal {
  @Input() task!: Task;

  @Output() close = new EventEmitter<void>();
  @Output() edit = new EventEmitter<Task>();
  @Output() delete = new EventEmitter<number>();

  TaskStatus = TaskStatus;

  comments: Comment[] = [];
  commentText: string = '';
  commentsLoading = false;

  constructor(private commentService: CommentService) {}

  ngOnChanges(): void {
    if (this.task) {
      this.loadComments();
    }
  }

  loadComments(): void {
    this.commentsLoading = true;
    this.commentService.getComments(this.task.id).subscribe({
      next: (res) => {
        this.comments = res;
        this.commentsLoading = false;
      },
      error: () => {
        this.commentsLoading = false;
      }
    });
  }

  postComment(): void {
    if (!this.commentText.trim()) return;

    this.commentService.addComment(this.task.id, this.commentText).subscribe((res) => {
      this.comments = [...this.comments, res]; // append new comment
      this.commentText = '';
    });
  }

  deleteComment(commentId: number) {
    this.commentService.deleteComment(commentId).subscribe(() => {
      this.comments = this.comments.filter((c) => c.id !== commentId);
    });
  }

  getStatusClasses(status: TaskStatus) {
    return {
      'bg-blue-50 text-blue-700': status === TaskStatus.TO_DO,
      'bg-yellow-50 text-yellow-700': status === TaskStatus.IN_PROGRESS,
      'bg-green-50 text-green-700': status === TaskStatus.COMPLETED,
    };
  }
}
