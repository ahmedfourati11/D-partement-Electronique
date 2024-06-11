import { CommonModule } from '@angular/common';
import { Component,OnInit,AfterViewInit,ElementRef,Renderer2 } from '@angular/core';

@Component({
  selector: 'app-actualites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './actualites.component.html',
  styleUrl: './actualites.component.css'
})
export class ActualitesComponent implements AfterViewInit {

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit(): void {
    const carousels = this.elRef.nativeElement.querySelectorAll('.carousel');

    carousels.forEach((carousel: HTMLElement) => {
      const slides: NodeListOf<HTMLElement> = carousel.querySelectorAll('.carousel-item');
      let currentIndex = 0;

      const showSlide = (index: number) => {
        slides.forEach((slide: HTMLElement, i: number) => {
          if (i === index) {
            slide.classList.add('active');
          } else {
            slide.classList.remove('active');
          }
        });
      };

      const nextSlide = () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
      };

      setInterval(nextSlide, 5000);

      showSlide(currentIndex);
    });
  }

}