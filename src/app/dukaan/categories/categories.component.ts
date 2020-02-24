import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
   selectedCategory:any={};
  constructor(private route:ActivatedRoute,
    private dataService:DataService) { }

  ngOnInit() {
    let categoryId = this.route.snapshot.paramMap.get('id');
    console.log(categoryId)
    this.getCategoryDetails(categoryId);
  }

  getCategoryDetails(categoryId:string){
    this.dataService.getCategoryDetails(categoryId).subscribe(data => {
      let categories = data;
      categories.forEach(element => {
        console.log(element)
        if(element.categoryId === +categoryId){
          this.selectedCategory = element;
          return false;
        }
      });   
      console.log(this.selectedCategory) 
   });
  }
}
