import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  links: {location: string, title: string}[] = [
    {location: "pomodoro", title: "Pomodoro"},
    {location: "project", title: "Project"},
    {location: "updates", title: "Release Info"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
