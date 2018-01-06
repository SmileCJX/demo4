import {Component, OnInit, AfterViewInit, AfterViewChecked} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, AfterViewInit, AfterViewChecked {

  ngAfterViewInit(): void {
    console.log('子组件的初始化完毕');
  }

  ngAfterViewChecked(): void {
    console.log('子组件的变更检测完毕');
  }

  constructor() { }

  ngOnInit() {
  }

  greeting(name: string) {
    console.log('hello' + name);
  }

}
