import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-refined-result',
  templateUrl: './refined-result.component.html',
  styleUrls: ['./refined-result.component.css']
})
export class RefinedResultComponent implements OnInit, OnDestroy {

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
