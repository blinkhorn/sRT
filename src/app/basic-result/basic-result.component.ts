import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-basic-result',
  templateUrl: './basic-result.component.html',
  styleUrls: ['./basic-result.component.css']
})
export class BasicResultComponent implements OnInit, OnDestroy {

  theSongTitle: string;
  private sub: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe( params => {
      this.theSongTitle = params['songTitle'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
