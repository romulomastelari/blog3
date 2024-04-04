import { Component, OnInit } from '@angular/core';
import { PostService } from "../service/post.service";
import { Post } from "../model/feed/Post";
import { AuthorService } from "../service/author.service";
import { Author } from "../model/feed/Author";

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {
  public listPost: Post[] = []
  public postMessage: Post = {
    name: '',
    message: ''
  };
  public listAuthor: Author[] = []
  public searchName: string = '';

  constructor(private postService: PostService, private authorService: AuthorService) {
  }

  ngOnInit() {
    this.findPosts()
    this.findAuthor()
  }

  findAuthor() {
    this.authorService.getAuthors().subscribe({
      next: (data: Author[]) => {
        this.listAuthor = data
      }
    })
  }

  searchByName() {
    console.log('searchName', this.searchName)
    if (this.searchName.length > 0) {
      this.listAuthor = this.listAuthor.filter(author => author.name.toLowerCase().includes(this.searchName.toLowerCase()));
    } else {
      this.findAuthor();
    }
  }

  findPosts() {
    this.postService.getPosts().subscribe({
      next: (data: Post[]) => {
        this.listPost = data;
      }
    })
  }

  registrationMessage() {
    console.log('postMessage', this.postMessage)
    this.postService.postMessage(this.postMessage).subscribe({
      next: (data: Post) => {
        console.log(data)
        this.findPosts()
      }
    })
  }

}
