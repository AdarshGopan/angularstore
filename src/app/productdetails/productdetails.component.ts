import { Component,OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';
import {ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit{
  productdetail:any
  constructor(private router:ActivatedRoute,private service:StoreService){}
  ngOnInit(): void {
    let id=this.router.snapshot.params["id"]
    // this.router.params.subscribe(p=>console.log(p["id"]))
    // console.log(id)
    this.service.getProductDetails(id).then(res=>res.json()).then(data=>this.productdetail=data)
  
  }

}
