import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-abouts',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './abouts.component.html',
  styleUrl: './abouts.component.css'
})
export class AboutsComponent {

}
