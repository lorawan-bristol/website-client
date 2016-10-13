import { Component, OnInit } from '@angular/core';

import { Http, Response, Jsonp } from '@angular/http';
import {Observable} from 'rxjs/Rx';

/*
 * Interface representing the status of Bristol LoRaWAN Gateway
 */
export interface GatewayStatus {
  gateway_ID  : string;
  up_active   : boolean;
  down_active : boolean;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public title: string = "Gateway Status"

  private gatewaysUrl : string =
    'http://bristollorawanweb.org/api/devicesstatus';

  private ttnGatewayStatusUrl : string =
    'http://staging.thethingsnetwork.org/gatewaystatus';

  public gatewaysStatus : GatewayStatus[];

  constructor(
    private jsonp: Jsonp) { }

  ngOnInit() {
    this.gateWayInfo();
  }

  private gateWayInfo() : void {
    this.jsonp.get(this.gatewaysUrl + '?callback=JSONP_CALLBACK')
      .map((res:Response) => res.json())
      .subscribe(
           data => {
              console.log("[DEBUG]: ... " + JSON.stringify(data));
              this.gatewaysStatus = data;
            },
            err  => console.error(err),
            ()   => console.log('done')
          );
  }
}
