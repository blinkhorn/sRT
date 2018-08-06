import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MoodListenerInputComponent } from './mood-listener-input/mood-listener-input.component';
import { BasicResultComponent } from './basic-result/basic-result.component';
import { RefinedResultComponent } from './refined-result/refined-result.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoodListenerInputComponent,
    BasicResultComponent,
    RefinedResultComponent
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
