import { Component, OnInit } from '@angular/core';
import { NgForm, FormControl } from '@angular/forms';
import { RequestsService } from './requests.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  songId: number;

  constructor(public requestsService: RequestsService) { }

  ngOnInit() {
  }

  onClickSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.requestsService.makeRequest(form.value.mood, form.value.listener);
    this.songId = this.requestsService.getSongId();
  }
}
