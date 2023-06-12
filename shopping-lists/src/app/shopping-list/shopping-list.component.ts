import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  shoppingItems:any[]=[{id:9,name:"5 apples"},{id:7,name:"12 eggs"},{id:10,name:"1 bread"}];
  
  constructor() { }

  ngOnInit(): void {
  }

  addItem(item:string){
    let r = Math.random() + this.shoppingItems.length;
    this.shoppingItems.push({id:r,name:item})
  }
  deleteItem(id:number){
    
    this.shoppingItems = this.shoppingItems.filter(item=>item.id!==id);
  }
}
