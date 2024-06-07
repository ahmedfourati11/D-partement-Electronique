import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-enseignants',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './enseignants.component.html',
  styleUrl: './enseignants.component.css'
})
export class EnseignantsComponent {

  isModalOpen = false;

  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }
}
