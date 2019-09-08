import { Injectable } from '@angular/core';
import {POST} from './postTemp.json';
import {PostInfo} from './postInfo'
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private urlGet:string = 'http://localhost:3000/posts';

  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http:HttpClient) { }

  getPost():Observable<PostInfo[]>{
    //return of(POST) || of([]);
    return this.http.get<PostInfo[]>(this.urlGet);
  }

  createPost(post:PostInfo):Observable<PostInfo>{
    return this.http.post<PostInfo>(this.urlGet,post,{headers: this.httpHeaders})
  }
}
