import { Component } from '@angular/core';
import { Slide } from '../../Enttity/slide';
import { CustomHttpService } from '../../service/custom-http.service';
import { Token } from '../../Enttity/token';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sliders',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sliders.component.html',
  styleUrl: './sliders.component.css',

})
export class SlidersComponent {
  slided: Slide[]= []  ;
  
  constructor(private customservice:CustomHttpService,)
  {
  this.customservice.makeGetRequest<Slide[] >("/Slide/GetSlide").subscribe(x => {this.slided = x as Slide[]  , console.log("df",x);  })
}
}
