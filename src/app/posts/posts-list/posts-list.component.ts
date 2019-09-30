import { Component, OnInit } from '@angular/core';
import { Observable }  from 'rxjs'
import { Posts } from '../posts'
import { PostsServiceService } from '../posts-service.service';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {

  posts : Posts[];

  constructor(private service: PostsServiceService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    return this.service.getAll().subscribe(post => {
      this.posts = post;
      console.log(post);
    });
  }

}
