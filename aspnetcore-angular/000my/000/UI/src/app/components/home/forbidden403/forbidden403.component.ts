import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forbidden403',
  templateUrl: './forbidden403.component.html',
  styles: []
})
export class Forbidden403Component implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
