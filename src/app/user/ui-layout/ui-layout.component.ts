import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AboutsComponent } from '../abouts/abouts.component';
import { CategoriesComponent } from '../categories/categories.component';
import { FootersComponent } from '../footers/footers.component';
import { HeadersComponent } from '../headers/headers.component';
import { SlidersComponent } from '../sliders/sliders.component';


@Component({
  selector: 'app-ui-layout',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeadersComponent, FootersComponent,RouterModule],
  templateUrl: './ui-layout.component.html',
  styleUrl: './ui-layout.component.css'
})
export class UILayoutComponent {

}
