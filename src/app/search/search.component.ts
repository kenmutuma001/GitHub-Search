import { Component, OnInit } from '@angular/core';
import { User } from './../user';
import { Repository} from '../repository';
import { GithubService } from '../github.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchUsers = true;

  user: User;
  repository: Repository;
  username: string;
  constructor(private github: GithubService) {
  }

  getProfile() {
    this.github.getUsername(this.username);

    this.github.getUser();
    this.user = this.github.user;

    this.github.getRepository(this.username);
    this.repository = this.github.repository;
    console.log(this.repository);
  }

  switchSearch() {
    this.searchUsers = !this.searchUsers;
  }


  ngOnInit() {
    this.github.getUser();
    this.user = this.github.user;

    this.github.getRepository(this.username);
    this.repository = this.github.repository;
  }

}
