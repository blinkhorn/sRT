import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RequestComponent } from './request/request.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { SongComponent } from './song/song.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RequestComponent,
    SongComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
