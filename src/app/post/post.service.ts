import { Injectable } from '@angular/core';
import {PostInfo} from './postInfo'
import {Observable} from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private urlGet:string = 'http://localhost:3000/posts';
  private urlGetWithId:string = 'http://localhost:3000/posts/';
  private urlPut:string = 'http://localhost:3000/posts/';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http:HttpClient) { }

  getPost():Observable<PostInfo[]>{
    return this.http.get<PostInfo[]>(this.urlGet);
  }

  getPostWithId(id:string):Observable<PostInfo>{
    this.urlGetWithId.concat(id);
    return this.http.get<PostInfo>(this.urlGetWithId);
  }

  createPost(post:PostInfo):Observable<PostInfo>{
    return this.http.post<PostInfo>(this.urlGet,post,{headers: this.httpHeaders})
  }

  uploadImage(image:FormData,id:string):Observable<File>{
    this.urlPut = this.urlPut.concat(id);
    this.urlPut = this.urlPut.concat("/picture");
    return this.http.put<File>(this.urlPut,image)
  }
}
