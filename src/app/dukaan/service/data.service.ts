import { element } from 'protractor';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Observable } from 'rxjs/Observable';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  categories:any=[];
  constructor(private http: HttpClient) {
		this.getJSON().subscribe(data => {
            console.log(data);
        });
	  }  
	  public getJSON(): Observable<any> {
        return this.http.get("./assets/data/categories.json");
    }

    public getCategoryDetails(categoryId:string): Observable<any> {
      let categories = this.http.get("./assets/data/categories.json");
      console.log(categories);
     
      return categories;
  }
}
