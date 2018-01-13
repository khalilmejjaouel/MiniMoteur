import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  posts:Post [] ;
  constructor(private dataService:DataService) {

   }

  btnRecherche(entry){
    this.dataService.getPosts(entry).subscribe((posts)=> {
      this.posts=posts;
    });
  } 
  ngOnInit() {
    this.dataService.getPosts("all").subscribe((posts)=> {
      this.posts=posts;
    });
  }

}
interface Post {
  brand : string ,
  energy : string ,
  model : string ,
  region :string ,
  mileage:string
}