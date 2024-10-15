import { Component, OnInit } from '@angular/core';
import { Slide } from '../../Enttity/slide';
import { CustomHttpService } from '../../service/custom-http.service';
import { CommonModule, NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import '@angular/localize/init';
@Component({
  selector: 'app-sliders',
  standalone: true,
  imports: [CommonModule, RouterLink,NgbCarouselModule],
  templateUrl: './sliders.component.html',
  styleUrl: './sliders.component.css',

})
export class SlidersComponent implements OnInit {
  slided: Slide[]= []  ;
  
  constructor(private customservice:CustomHttpService,)
  {this.customservice.makeGetRequest<Slide[] >("/Slide/SlideList").subscribe(x => {this.slided = x as Slide[]  , console.log("df",x);  })
  
}
  ngOnInit(): void {
    
  }
}
