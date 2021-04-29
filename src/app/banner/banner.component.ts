import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

images : string[] = [
  'assets/images/librosf.jpg',
  'assets/images/jdg.jpg',
  'assets/images/libros.jpg'
];

  constructor() { }

  ngOnInit(): void {
  }

}
