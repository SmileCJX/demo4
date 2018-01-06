import {Component, OnInit, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-child3',
  templateUrl: './child3.component.html',
  styleUrls: ['./child3.component.css']
})
export class Child3Component implements OnInit, OnDestroy {

  ngOnDestroy(): void {
    console.log('child3被销毁');
  }

  constructor() { }

  ngOnInit() {
  }

}
