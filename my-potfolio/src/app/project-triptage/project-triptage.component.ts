import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-triptage',
  templateUrl: './project-triptage.component.html',
  styleUrls: ['./project-triptage.component.css']
})
export class ProjectTriptageComponent implements OnInit {
  imageUrl: string = "/assets/images/";
  images: any[] = ["Home1.jpg","Home2.jpg","Search1.jpg","ViewProfile1.jpg","ViewRoute1.jpg","ViewRoute2.jpg" ];

  constructor() { }

  ngOnInit() {
  }

}
