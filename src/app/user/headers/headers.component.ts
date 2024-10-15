import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AboutsComponent } from '../abouts/abouts.component';

@Component({
  selector: 'app-headers',
  standalone: true,
  imports: [
    CommonModule,RouterLink,AboutsComponent
  ],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.css'
})
export class HeadersComponent {

}
