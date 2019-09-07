import { Component, OnInit } from '@angular/core';
import {PostInfo} from './postInfo';
import {PostService} from './post.service'
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  postList: PostInfo[];
  constructor(private postService:PostService) { }

  ngOnInit() {
    this.postService.getPost().subscribe(
      posts => this.postList = posts
    );
  }

}
