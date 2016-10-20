import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetup',
  templateUrl: './meetup.component.html',
  styleUrls: ['./meetup.component.css']
})
export class MeetupComponent implements OnInit {
  public title: string = "Meetup" 

  constructor() { }

  ngOnInit() {
  }

}
