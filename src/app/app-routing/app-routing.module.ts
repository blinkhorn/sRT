import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RequestComponent } from '../request/request.component';

const routes: Routes = [
  { path: '', component: RequestComponent }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
