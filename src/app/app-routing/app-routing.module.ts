import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RequestComponent } from '../request/request.component';
import { SongComponent } from '../song/song.component';

const routes: Routes = [
  { path: '', component: RequestComponent },
  { path: 'song/:songId', component: SongComponent }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
