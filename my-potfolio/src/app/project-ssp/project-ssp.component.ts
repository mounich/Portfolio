import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-ssp',
  templateUrl: './project-ssp.component.html',
  styleUrls: ['./project-ssp.component.css']
})
export class ProjectSspComponent implements OnInit {
   imageUrl: string = "/assets/images/";
   images: any[] = ["Login.JPG","Home.JPG","Benifits.1.jpg","Messages.JPG","Claims.JPG","Claims.JPG" ];

  constructor() {
   
   }

  ngOnInit() {
  }

}
