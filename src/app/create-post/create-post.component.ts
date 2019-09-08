import { Component, OnInit, Inject } from '@angular/core';
import {PostInfo} from '../post/postInfo';
import {ElementRef} from '@angular/core';
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
  private tags: Array<string> = [];
  private selectedFile:File = null;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private postService:PostService,
    private router:Router
) { }

  ngOnInit() {
    document.getElementById("buttonplus").style.visibility = 'hidden';
    document.getElementById("buttonpost").style.visibility = 'visible';
  }

  public createPost():void{
    this.post.tags = this.tags;
    this.postService.createPost(this.post).subscribe(
      response => {
        this.uploadImage(response.id);
      }
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

  public fileSelected(event):void{
    this.selectedFile = <File>event.target.files[0];
    var preview = document.getElementById("preview");
    preview.src = URL.createObjectURL(this.selectedFile);
  }

  public uploadImage(id:string){
    const image = new FormData();
    image.append('image',this.selectedFile,this.selectedFile.name)
    this.postService.uploadImage(image,id).subscribe(
      response => this.router.navigate(['/list-post'])
    );
  }

}
