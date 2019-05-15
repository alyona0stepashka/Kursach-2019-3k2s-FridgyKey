import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-open',
  templateUrl: './open.component.html',
  styles: []
})
export class OpenComponent implements OnInit {
 
  public fridgeId: number;
  constructor( ) { }

  ngOnInit() { 
    this.fridgeId = parseInt(localStorage.getItem("fridgeId"));
  }

}
