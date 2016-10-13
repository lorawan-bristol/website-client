import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gateway',
  templateUrl: './gateway.component.html',
  styleUrls: ['./gateway.component.css']
})
export class GatewayComponent implements OnInit {
  public title: string = "Building and Deploying a Gateway" 

  constructor() { }

  ngOnInit() {
  }

}
