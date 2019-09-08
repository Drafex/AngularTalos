import { Component, OnInit, Inject } from '@angular/core';
import {PostInfo} from '../post/postInfo';
import {ViewChild, ElementRef} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import {PostService} from '../post/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  private post:PostInfo = new PostInfo();
  tags: Array<string> = [];

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private postService:PostService,
    private router:Router
) { }

  ngOnInit() {
  }

  public createPost():void{
    this.post.tags = this.tags;
    this.postService.createPost(this.post).subscribe(
      response => this.router.navigate(['/list-post'])
    );
  }

  public addTag(element:ElementRef):void{
    if (!this.tags.includes(element.toString())) {
        this.tags.push(element.toString());
    }

  }

  public deleteTag(element:string):void{
    var filtered = this.tags.filter(function (el) {
        return el != element;
    });

    this.tags = filtered;
  }

}
