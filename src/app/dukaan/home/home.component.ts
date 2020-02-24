import { DataService } from './../service/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories:any=[];
  constructor(private dataService:DataService) { }

  ngOnInit() {
     this.getCategories();
  }

  getCategories(){
    this.dataService.getJSON().subscribe(data => {
      console.log(data);
      this.categories=data;
  });

  }

}
