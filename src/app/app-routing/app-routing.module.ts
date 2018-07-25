import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RequestComponent } from '../request/request.component';
import { ResponseComponent } from '../response/response.component';

const routes: Routes = [
  { path: '', component: RequestComponent },
  { path: 'response', component: ResponseComponent }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
