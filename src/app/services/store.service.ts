import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  reviews=[
    {"id":1,"pid":2,"comment":"good","user":"anj","rating":4},
    {"id":2,"pid":2,"comment":"worth","user":"anj","rating":5},
    {"id":3,"pid":3,"comment":"best product","user":"anj","rating":4},
    {"id":4,"pid":3,"comment":"good","user":"anj","rating":5},
    {"id":5,"pid":4,"comment":"worth","user":"anj","rating":3},
    {"id":6,"pid":4,"comment":"must buy","user":"anj","rating":5},
    {"id":7,"pid":5,"comment":"awsome","user":"anj","rating":4},
    {"id":8,"pid":5,"comment":"good","user":"anj","rating":4},
    {"id":8,"pid":20,"comment":"affordable","user":"athul rayappan","rating":4.5},

  ]
  constructor() { }
  getAllProducts()
  {
    let tkn=localStorage.getItem("token")
    if(tkn)
    {
      return fetch("http://127.0.0.1:8000/products",{
        "method":"GET",
        "headers":
        {
          "Content-type":"application/json;charset=UTF-8",
          "Authorization":tkn
        }
      })
    }
    else{
      return new Promise((res,rej)=>rej("error"))
    }
  }
  getProductDetails(id:any)
  {
    return fetch(`https://fakestoreapi.com/products/${id}`)
  }
  getProductReviews(id:number)
  {
    return this.reviews.filter(r=>r.pid==id)
  }
  addProductReview(data:any,id:any){
    data["pid"]=id
    this.reviews.push(data)
    console.log(this.reviews)
    
  }
  populateCategories()
  {
    return fetch("https://fakestoreapi.com/products/categories")
  }
  getToken(data:any)
  {
    return fetch("http://127.0.0.1:8000/token",{
      "method":"POST",
      "body":JSON.stringify(data),
      "headers":{
        "Content-type":"application/json;charset=UTF-8"
      }
    })
  }
}
