import { Component, OnInit } from '@angular/core';
import { DataService } from "app/shared/services/data.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  providers: [DataService]
})
export class MainComponent implements OnInit {
  public cities: any;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getCities().subscribe(res => {
      this.cities = res.cities;
    })
  }

}
