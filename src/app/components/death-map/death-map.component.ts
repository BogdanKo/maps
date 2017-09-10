import { Component, OnInit, Input } from '@angular/core';
import { DataService } from "app/shared/services/data.service";
import { styles } from "app/shared/const/map-styles";

@Component({
  selector: 'app-death-map',
  templateUrl: './death-map.component.html',
  styleUrls: ['./death-map.component.css'],
  providers: [DataService]
})
export class DeathMapComponent implements OnInit {
  public zoom: number = 5;
  public centerLat: number = 50.4016991;
  public centerLng: number = 30.252514;
  public mapStyle = styles;
  private _cities: any;
  public citiesKeys: any;

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
