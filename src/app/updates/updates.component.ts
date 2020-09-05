import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-updates',
  templateUrl: './updates.component.html',
  styleUrls: ['./updates.component.css'],
})
export class UpdatesComponent implements OnInit {
  constructor() {}

  updates: {
    date: string;
    title: string;
    lead: string;
    bullets: string[];
  }[] = [
    {
      date: '',
      title: '',
      lead: '',
      bullets: [
        '',
        '',
      ],
    },
  ];

  ngOnInit(): void {}
}
