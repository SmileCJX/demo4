import {Component, OnInit, AfterContentInit, AfterContentChecked, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit, AfterContentInit, AfterContentChecked, OnDestroy{

  ngOnDestroy(): void {
    console.log('child2组件被销毁');
  }

  ngAfterContentInit(): void {
    console.log("子组件投影内容初始化完毕");
  }

  ngAfterContentChecked(): void {
    console.log("子组件投影内容变更检测完毕");
  }

  constructor() { }

  ngOnInit() {
  }

}
