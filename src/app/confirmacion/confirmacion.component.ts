import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-confirmacion',
  templateUrl: './confirmacion.component.html',
  styleUrls: ['./confirmacion.component.css']
})
export class ConfirmacionComponent implements OnInit {

  constructor() { }
  private selectedLink = 'Credito';

  ngOnInit() {
  }

  setradio(e: string): void {

    this.selectedLink = e;

  }

  isSelected(name: string): boolean {

    if (!this.selectedLink) {
      return false;
    }

    return (this.selectedLink === name);
  }

}
