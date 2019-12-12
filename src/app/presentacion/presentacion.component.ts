import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FiestasService } from '../servicios/fiestas.service';
import { Fiesta } from '../interfaces/fiesta';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private fiestasService: FiestasService,) {
    
   }
fiesta : Fiesta;
  ngOnInit() {
 

  this.getFiesta();
}

getFiesta(): void {
  const id = this.route.snapshot.paramMap.get('id');
  this.fiestasService.getFiesta(id)
    .subscribe(fiesta => this.fiesta = fiesta.payload.data() as Fiesta);
}

}
