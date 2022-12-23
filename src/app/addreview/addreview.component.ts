import { Component,Input,OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms'
import { StoreService } from '../services/store.service';
@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit{
    @Input() proid=""
    reviewform=new FormGroup(
    {  
      "comment":new FormControl("",Validators.required),
      "rating":new FormControl("",Validators.required)
    }
    )
    constructor(private service:StoreService){}
    ngOnInit(): void {
      
    }
    postReview(){
      let data=this.reviewform.value
      console.log(this.proid);
      
      this.service.addProductReview(data,this.proid)
    }
}
