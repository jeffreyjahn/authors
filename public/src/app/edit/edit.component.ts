import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  editAuthor: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }
  goHome() {
    this._router.navigate(['/home']);
  }

  ngOnInit() {
    this.editAuthor = {};
    this._route.params.subscribe((params: Params) =>{
      console.log(params['id'])
      this.getAuthorFromService(params['id'])
    })
  }
  getAuthorFromService(id){
    this._httpService.getAuthor(id)
      .subscribe(data=>{
        console.log("Got one author!", data);
        this.editAuthor = data;
      })
  }
  editAuthorSubmit(id){
    this._httpService.updateAuthor(id, this.editAuthor)
      .subscribe(data=>{
        console.log("UPDATED THE DAMN AUTHOR", data);
        this.goHome();
      })
  }

}
