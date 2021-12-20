import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-seacrh',
  templateUrl: './seacrh.component.html',
  styles: [],
})
export class SeacrhComponent {
  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService) {}

  buscar() {
    const valorBuscado = this.txtBuscar.nativeElement.value;

    if (valorBuscado.trim().length === 0) {
      return;
    }

    this.gifsService.buscarGifs(valorBuscado);

    this.txtBuscar.nativeElement.value = '';
  }
}
