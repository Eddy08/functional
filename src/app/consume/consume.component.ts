import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'consume',
  templateUrl: './consume.component.html',
  styleUrls: ['./consume.component.css']
})
export class ConsumeComponent implements OnInit {

  constructor() { }
  arr=[...Array(100000).keys()]

  ngOnInit(): void {
  }
  getColor(){
    let randomColor="rgba("+Math.floor(Math.random()*255)+","+Math.ceil(Math.random()*255)+","+Math.floor(Math.random()*255)+")";
    return {'background-color':randomColor}
  }
}
