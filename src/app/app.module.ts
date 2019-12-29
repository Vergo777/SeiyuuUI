import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SeiyuuDetailsComponent } from './seiyuu-details/seiyuu-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { RolesListComponent } from './seiyuu-details/roles-list/roles-list.component';
import { RolesListElementComponent } from './seiyuu-details/roles-list-element/roles-list-element.component';

@NgModule({
  declarations: [
    AppComponent,
    SeiyuuDetailsComponent,
    NavbarComponent,
    RolesListComponent,
    RolesListElementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
