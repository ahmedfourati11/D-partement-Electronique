import { Component } from '@angular/core';
import { RouterOutlet,Router } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NavbarComponent,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Departement__Electronique';

  constructor(private router: Router) {}

  shouldShowNavbar(): boolean {
    const hiddenPaths = ['/Liste-Des-Email-Groupe', '/Contact-Chef-Dep'];
    return !hiddenPaths.includes(this.router.url); }

}
