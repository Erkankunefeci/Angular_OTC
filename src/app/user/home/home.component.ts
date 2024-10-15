import { Component } from '@angular/core';
import { HeadersComponent } from "../headers/headers.component";
import { FootersComponent } from "../footers/footers.component";
import { SlidersComponent } from "../sliders/sliders.component";
import { AboutsComponent } from "../abouts/abouts.component";
import { CategoriesComponent } from "../categories/categories.component";
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [CommonModule, HeadersComponent, FootersComponent, SlidersComponent, AboutsComponent, CategoriesComponent,RouterModule]
})
export class HomeComponent {
constructor(){}
}
