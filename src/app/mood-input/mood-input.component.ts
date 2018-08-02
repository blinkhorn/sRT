import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-mood-input',
  templateUrl: './mood-input.component.html',
  styleUrls: ['./mood-input.component.css']
})
export class MoodInputComponent implements OnInit {
  private listenerTypeAddress: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmitMood(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.listenerTypeAddress = `http://localhost:4200/listener-type/${form.value.mood}`;
  }

  getListenerTypeAddress(): string {
    return this.listenerTypeAddress;
  }


}
