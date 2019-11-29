import { Component, OnInit } from '@angular/core';
import { FiestaService } from '../servicios/fiesta.service';
import { Fiesta } from '../interfaces/fiesta';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor(private fiestasService: FiestaService) { }

fiestas: Fiesta[];

  ngOnInit() {
    this.getFiestas();
  }

getFiestas(){
  
}

}
