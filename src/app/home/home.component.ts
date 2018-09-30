import { Component, OnInit } from '@angular/core';
import { User } from './user-model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  friends: User [] = [];
  suggestions: User [] = [];

  users: User[] = [
    {
      nick: 'George',
      subnick: 'Gio',
      age: 25,
      email: 'jorge.moreno@gmail.com',
      isfriend: true,
      uid: 1
    },
    {
      nick: 'George',
      subnick: 'Gio',
      age: 25,
      email: 'jorge.moreno@gmail.com',
      isfriend: true,
      uid: 2
    },
    {
      nick: 'George',
      subnick: 'Gio',
      age: 25,
      email: 'jorge.moreno@gmail.com',
      isfriend: true,
      uid: 3
    },
    {
      nick: 'George',
      subnick: 'Gio',
      age: 25,
      email: 'jorge.moreno@gmail.com',
      isfriend: false,
      uid: 4
    },
    {
      nick: 'George',
      subnick: 'Gio',
      age: 25,
      email: 'jorge.moreno@gmail.com',
      isfriend: false,
      uid: 5
    },
  ];

  constructor() {
    this.users.map((friend) => {
      if (friend.isfriend) {
        this.friends.push(friend);
      } else {
        this.suggestions.push(friend);
      }
    });
  }

  ngOnInit() {
  }

}
