import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { ServiceResponse } from '../models/story';
import { STORIES } from '../mocks/stories';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class StoryService {

  private baseAPI = 'https://story.husol.xyz/api';
  public httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcm9maWxlIjp7ImlkIjo3LCJlbWFpbCI6ImVucXVpcnlAaHVzb2wub3JnIiwibW9iaWxlIjoiIiwiZ2dfaWQiOm51bGwsImZiX2lkIjpudWxsLCJmdWxsX25hbWUiOiJBbm9ueW1vdXMiLCJhdmF0YXIiOiIiLCJ0b2tlbiI6IiIsInJvbGUiOjEsImxhc3RfbG9naW4iOiIyMDIwLTA4LTI2VDE2OjExOjA1LjI3Nzk1NTUxNCswNzowMCIsInN0YXR1cyI6MX0sImV4cCI6MTU5OTAzNzg2NSwiaXNzIjoiQmV0YSBIdXNvbCJ9.BUygVRM67LjUgqKhgpgys0jQDyn3J6VAN88qdW1_bUA'
    })
  };

  constructor(private http: HttpClient, private messageService: MessageService) { }

  /** Log a StoryService message with the MessageService */
  // tslint:disable-next-line:typedef
  private log(message: string) {
    this.messageService.add(`StoryService: ${message}`);
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

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

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
    this.log('StoryService: fetched stories');
    return this.http.get<ServiceResponse>(this.baseAPI + '/stories', this.httpOptions).
      pipe(
          tap(_ => this.log('fetched stories')),
          catchError(this.handleError<ServiceResponse>('getStories'))
      );
  }

  getStoryByID(id: number): Observable<ServiceResponse> {
    this.messageService.add(`StoryService: fetched story id=${id}`);
    return this.http.get<ServiceResponse>(this.baseAPI + `/stories/${id}`, this.httpOptions).
      pipe(
          tap(_ => this.log('fetched story by id')),
          catchError(this.handleError<ServiceResponse>('getStoryByID'))
      );
  }
}
