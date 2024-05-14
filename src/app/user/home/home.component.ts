import { Component } from '@angular/core';
import { HeadersComponent } from "../headers/headers.component";
import { FootersComponent } from "../footers/footers.component";
import { SlidersComponent } from "../sliders/sliders.component";
import { AboutsComponent } from "../abouts/abouts.component";
import { CategoriesComponent } from "../categories/categories.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeadersComponent, FootersComponent, SlidersComponent, AboutsComponent, CategoriesComponent]
})
export class HomeComponent {

}
