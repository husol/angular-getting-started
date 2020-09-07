import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { ServiceResponse } from '../models/story';
import { STORIES } from '../mocks/stories';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  baseAPI: string;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9maWxlIjp7ImlkIjo3LCJlbWFpbCI6ImVucXVpcnlAaHVzb2wub3JnIiwibW9iaWxlIjoiIiwiZ2dfaWQiOm51bGwsImZiX2lkIjpudWxsLCJmdWxsX25hbWUiOiJBbm9ueW1vdXMiLCJhdmF0YXIiOiIiLCJ0b2tlbiI6IiIsInJvbGUiOjEsImxhc3RfbG9naW4iOiIyMDIwLTA5LTA1VDE2OjIzOjA0LjU0MDUxNzk3NyswNzowMCIsInN0YXR1cyI6MX0sImV4cCI6MTU5OTkwMjU4NCwiaXNzIjoiQmV0YSBIdXNvbCJ9.LoDRh0UuuCJKrP4yKSzKikD5cogHWBQtdFZ5jzQwvkQ'
    })
  };

  constructor(private http: HttpClient, private messageService: MessageService) {
    this.baseAPI = environment.STORY_SERVICE;
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  // tslint:disable-next-line:typedef
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  // Mock data
  // getStories(): Observable<Story[]> {
  //   this.messageService.add('StoryService: fetched stories');
  //   return of(STORIES);
  // }
  //
  // getStoryByID(id: number): Observable<Story> {
  //   this.messageService.add(`StoryService: fetched story id=${id}`);
  //   return of(STORIES.find(story => story.id === id));
  // }

  // Call API
  getStories(): Observable<ServiceResponse> {
    const url = this.baseAPI + '/stories';

    return this.http.get<ServiceResponse>(url, this.httpOptions).
      pipe(
          catchError(this.handleError<ServiceResponse>('getStories'))
      );
  }

  getStoryByID(id: number): Observable<ServiceResponse> {
    const url = this.baseAPI + `/stories/${id}`;

    return this.http.get<ServiceResponse>(url, this.httpOptions).
      pipe(
          catchError(this.handleError<ServiceResponse>('getStoryByID'))
      );
  }
}
