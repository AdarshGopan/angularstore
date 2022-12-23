import { Component,Input ,OnInit } from '@angular/core';
import { StoreService } from '../services/store.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit{
  review:any
  @Input()pid:any=""

  constructor(private service:StoreService){}

  ngOnInit(): void
  {
    // console.log(this.pid)
    this.review=this.service.getProductReviews(this.pid)
    console.log(this.review)
    
  }
}
