import { Component, OnInit } from '@angular/core';
import {PostInfo} from '../post/postInfo';
import { Router } from '@angular/router';
import {PostService} from '../post/post.service';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {
  private post:PostInfo = {
    id:"",
    title:"",
    description:"",
    photoUrl:"",
    tags:[]
  };

  constructor(private router:Router,
  private postService:PostService) { }

  ngOnInit() {
    document.getElementById("buttonplus").style.visibility = 'visible';
    document.getElementById("buttonpost").style.visibility = 'visible';

    var splited = this.router.url.split('/',3);
    console.log(splited[2]);
    this.postService.getPostWithId(splited[2]).subscribe(
      response => {
        this.post = response[0];
        if (this.post.photoUrl[0]!='/') {
          this.post.photoUrl = '/'.concat(this.post.photoUrl);
        }
        console.log(this.post);
      }
    );
  }

}
