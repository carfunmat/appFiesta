import { Component, OnInit } from '@angular/core';
import { Fiesta } from '../interfaces/fiesta';
import { FiestasService } from '../servicios/fiestas.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private fiestasService: FiestasService) { }



  ngOnInit() {
    this.getFiestas();
  }

  fiestas: Array<[string, Fiesta]> = [];

  getFiestas() {
    this.fiestasService.getFiestas().subscribe((fiestaSnapshot) => {
      fiestaSnapshot.forEach((fiestaData: any) => this.fiestas.push(
        [fiestaData.payload.doc.id
          , fiestaData.payload.doc.data()]
    )
   )
  });
}

}
