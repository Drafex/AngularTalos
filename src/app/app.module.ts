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
import { FlexLayoutModule } from '@angular/flex-layout';
import { ViewPostComponent } from './view-post/view-post.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes =[
  {path: '', redirectTo:'/list-post',pathMatch:'full'},
  {path: 'list-post', component:PostComponent},
  {path: 'create-post', component:CreatePostComponent},
  {path: 'view-post/:id', component:ViewPostComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    CreatePostComponent,
    ViewPostComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    FlexLayoutModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
