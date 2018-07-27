import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RequestsService } from './requests.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  enteredMood = '';
  enteredListener = '';

  constructor(public requestsService: RequestsService) { }

  ngOnInit() {
  }

  onClickSubmit(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.requestsService.addRequest(form.value.mood, form.value.listener);
  }
}
