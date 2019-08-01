import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public id: String;

  constructor(private routeInfo: ActivatedRoute) { 
    
  }

  

  ngOnInit() {
    this.routeInfo.params.subscribe((params: Params) => {
      this.id = params['id']
    })
  }

}
