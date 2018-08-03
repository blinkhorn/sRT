import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-listener-type-input',
  templateUrl: './listener-type-input.component.html',
  styleUrls: ['./listener-type-input.component.css']
})
export class ListenerTypeInputComponent implements OnInit {

  private mood: string;

  constructor(public route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe( (paramMap: ParamMap) => {
      this.mood = paramMap.get('mood');
    });
  }

  getMood(): string {
    return this.mood;
  }

}
