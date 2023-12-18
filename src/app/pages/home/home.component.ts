import { Component } from '@angular/core';
import { CardProjectComponent } from '../../components/card-project/card-project.component';

@Component({
  selector: 'page-home',
  standalone: true,
  imports: [CardProjectComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
