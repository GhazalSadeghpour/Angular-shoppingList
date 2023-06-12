import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingListElementComponent } from './shopping-list/shopping-list-element/shopping-list-element.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    ShoppingListElementComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
