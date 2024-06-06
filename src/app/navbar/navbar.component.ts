import { NgIf } from '@angular/common';
import { Component,ElementRef, ViewChild} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  @ViewChild('mobileMenu') mobileMenu!: ElementRef<HTMLDivElement>;
  isDropdownOpen: boolean = false;
  isMobileDropdownOpen: boolean = false;
  isOpen: boolean = false;

  constructor() { }

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleMobileDropdown() {
    this.isMobileDropdownOpen = !this.isMobileDropdownOpen;
  }

  toggleMobileMenu() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      this.mobileMenu.nativeElement.classList.add('open');
    } else {
      this.mobileMenu.nativeElement.classList.remove('open');
    }
  }

}
