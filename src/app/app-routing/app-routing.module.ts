import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MoodListenerInputComponent } from '../mood-listener-input/mood-listener-input.component';
import { RefinedResultComponent } from '../refined-result/refined-result.component';
import { BasicResultComponent } from '../basic-result/basic-result.component';

const routes: Routes = [
  { path: '', component: MoodListenerInputComponent },
  { path: 'result/refined', component: RefinedResultComponent },
  { path: 'result/basic', component: BasicResultComponent },
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
