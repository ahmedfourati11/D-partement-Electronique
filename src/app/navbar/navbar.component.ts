import { NgIf } from '@angular/common';
import { Component,ElementRef, ViewChild,HostListener} from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgIf,RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private elementRef: ElementRef) { }

  closeDropdown() {
    this.isDropdownOpen = false;
  }

  closeMobileMenu() {
    this.isOpen = false;
  }  

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
  if (!this.elementRef.nativeElement.contains(event.target)) {
    this.closeDropdown();
  }
}

  @ViewChild('mobileMenu') mobileMenu!: ElementRef<HTMLDivElement>;
  isDropdownOpen: boolean = false;
  isMobileDropdownOpen: boolean = false;
  isOpen: boolean = false;

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
