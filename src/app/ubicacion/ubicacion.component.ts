import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.component.html',
  styleUrls: ['./ubicacion.component.css']
})
export class UbicacionComponent implements OnInit {

  center: google.maps.LatLngLiteral;

  constructor() { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: 37.417236,
        lng: -6.004564,
      }
    })
  }

}
