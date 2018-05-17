import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../http.service';
import { _getComponentHostLElementNode } from '@angular/core/src/render3/instructions';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newAuthor: any;
  errors: any;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }
  ngOnInit() {
    this._route.params.subscribe((params: Params) => console.log(params['id']));
    this.newAuthor = {name:""};
    this.errors = [];
  }
  goHome() {
    this._router.navigate(['/home']);
  }
  newAuthorSubmit(){
    this._httpService.newAuthorAdd(this.newAuthor)
      .subscribe(data=>{
        console.log("Submitted a new author!", data);
        if(data['errors']){
          for (var key in data['errors']['errors']){
            this.errors.push(data['errors']['errors'][key].message);
          }
          console.log(this.errors)
        }else{
          this.newAuthor = data;
          this.goHome();
        }
      })
  }

}
