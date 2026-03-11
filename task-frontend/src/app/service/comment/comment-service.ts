import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../../models/comment/comment-model';

@Injectable({
  providedIn: 'root',
})
export class CommentService {
  private readonly BASE_URL = 'http://localhost:8080/api';

  constructor(private http: HttpClient) {}

  getComments(taskId: number): Observable<Comment[]> {
    return this.http.get<Comment[]>(`${this.BASE_URL}/tasks/${taskId}/comments`);
  }

  addComment(taskId: number, body: string): Observable<Comment> {
    return this.http.post<Comment>(`${this.BASE_URL}/tasks/${taskId}/comments`, { body });
  }

  deleteComment(commentId: number): Observable<void> {
    return this.http.delete<void>(`${this.BASE_URL}/comments/${commentId}`);
  }
}
