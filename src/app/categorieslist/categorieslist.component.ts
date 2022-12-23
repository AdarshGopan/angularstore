import { Component , OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-categorieslist',
  templateUrl: './categorieslist.component.html',
  styleUrls: ['./categorieslist.component.css']
})
export class CategorieslistComponent implements OnInit{
    category:any
    constructor(private service:StoreService){}
    ngOnInit(): void {
      this.service.populateCategories().then(res=>res.json()).then(data=>this.category=data)
    }
}
