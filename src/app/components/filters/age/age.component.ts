import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-age',
  templateUrl: './age.component.html',
  styleUrls: ['./age.component.css']
})
export class AgeComponent implements OnInit {

  public range: any = [18, 60];
  public configs = {
      connect: true,
      range: {
        min: 18,
        max: 60
      },
      step: 1
  };

  constructor() { }

  ngOnInit() {
  }

  onChange(event) {
    console.log(event);
  }

}
