import { Component } from '@angular/core';
import { ViewChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {
  @ViewChild('myModal') myModal!: ElementRef<HTMLDivElement>;
  constructor() { }
  ngOnInit(): void {
  }
  openModal() {
    this.myModal.nativeElement.style.display = 'block';
    console.log("abrir")
  }
  closeModal() {
    this.myModal.nativeElement.style.display = 'none';
  }
  Editar() {
    
  }

}
