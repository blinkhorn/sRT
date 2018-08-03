import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListenerTypeInputComponent } from '../listener-type-input/listener-type-input.component';
import { MoodListenerInputComponent } from '../mood-listener-input/mood-listener-input.component';

const routes: Routes = [
  { path: '', component: MoodListenerInputComponent },
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
