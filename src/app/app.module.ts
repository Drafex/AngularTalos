import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import {PostService} from './post/post.service';
import { HttpClientModule } from '@angular/common/http';
import { CreatePostComponent } from './create-post/create-post.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes =[
  {path: '', redirectTo:'/list-post',pathMatch:'full'},
  {path: 'list-post', component:PostComponent},
  {path: 'create-post', component:CreatePostComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    CreatePostComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
