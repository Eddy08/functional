import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'waste',
  templateUrl: './waste.component.html',
  styleUrls: ['./waste.component.css']
})
export class WasteComponent implements OnInit {
  @Input()
  color!: any;
  constructor() { }

  ngOnInit(): void {
  }


}
