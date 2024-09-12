import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export interface Issue {
  id: number;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  private apiUrl = 'http://localhost:4000/api/issues'; 
  // Url of the node.js Api

  constructor(private http: HttpClient) {}
    
  // Handle errors

  private handleError (error: any) {
    console.error('API request error:', error);
    return throwError(error);
  }
  
  //CREATe operation
  createIssue(issue: Issue):
  Observable<any> {
    return this.http.post(this.apiUrl, issue).pipe(catchError(this.handleError));
  }
  
  // Read operation

  getIssue(id?:number): Observable<Issue[] | Issue>{
    const url = id? `${this.apiUrl}/ ${id}` : this.apiUrl;
    return this.http.get<Issue[] | Issue> (url).pipe(catchError(this.handleError));

  }

  //Update operation

  updateIssue(id:number, issue: Issue) : Observable<any> {
    return this.http.put(`$ {this.apiUrl}/${id}`, issue ).pipe(catchError(this.handleError));
  }

  // DElete operation 

  deleteIssue(id:number): 
  Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`).pipe(catchError(this.handleError));
  }
}
