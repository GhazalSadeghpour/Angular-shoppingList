import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-shopping-list-element',
  templateUrl: './shopping-list-element.component.html',
  styleUrls: ['./shopping-list-element.component.css']
})
export class ShoppingListElementComponent implements OnInit {
  @Input() items: any;
  constructor() { }

  ngOnInit(): void {
  }
  deleteItem(id:number){
    
    this.items = this.items.filter((item: { id: number; })=>item.id!==id);
  }
}
