import { Component, OnInit, Input } from '@angular/core';
import { DataService } from "app/shared/services/data.service";
import { styles } from '../../shared/const/map-styles';

@Component({
  selector: 'app-birth-map',
  templateUrl: './birth-map.component.html',
  styleUrls: ['./birth-map.component.css'],
  providers: [DataService]
})
export class BirthMapComponent implements OnInit {
  public zoom: number = 5;
  public centerLat: number = 50.4016991;
  public centerLng: number = 30.252514;
  public mapStyle = styles;
  public citiesKeys: any;
  private _cities: any;

  @Input('cities') set cities(value: any) {
    if (value) {
      this.citiesKeys = Object.keys(value);
      this._cities = value;
      console.log(this._cities);
    } else {
      this._cities = null;
    }
  }

  get cities(): any {
    return this._cities;
  }
  
  constructor() { }

  ngOnInit() {
  }

  clickedMarker(city: any, type: number) {
    this.centerLat = city.coords.lat;
    this.centerLng = city.coords.lng;
    this.zoom = 8;
    console.log(type);
  }

}
