import { CommonModule } from '@angular/common';
import { Component,ViewChild,ElementRef } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-nav-ensg',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './nav-ensg.component.html',
  styleUrl: './nav-ensg.component.css'
})
export class NavEnsgComponent {

  @ViewChild('mobileMenu') mobileMenu!: ElementRef<HTMLDivElement>;
  isOpen: boolean = false;
  toggleMobileMenu() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.mobileMenu.nativeElement.classList.add('open');
    } else {
      this.mobileMenu.nativeElement.classList.remove('open');
    }
  }

}
