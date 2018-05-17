import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  authors: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.authors = [];
    this.getAuthorsFromService();
  }
  getAuthorsFromService(){
    this._httpService.getAuthors()
      .subscribe(data=>{
        console.log("Got authors!", data);
        this.authors = data;
      })
  }
  deleteAuthorInService(author_id){
    this._httpService.deleteAuthor(author_id)
      .subscribe(data=>{
        console.log("Deleted author!");
        this.getAuthorsFromService();
      })
  }
}
