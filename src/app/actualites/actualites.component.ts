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
    const slides = this.elRef.nativeElement.querySelectorAll('.carousel-item');
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

    setInterval(nextSlide, 6000);

    showSlide(currentIndex);
  }

}