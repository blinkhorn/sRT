import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoodInputComponent } from '../mood-input/mood-input.component';
import { ListenerTypeInputComponent } from '../listener-type-input/listener-type-input.component';

const routes: Routes = [
  { path: '', component: MoodInputComponent },
  { path: 'listener-type-input/:mood', component: ListenerTypeInputComponent }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
