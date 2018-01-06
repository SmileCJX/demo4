import {
  Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked, AfterContentInit,
  AfterContentChecked
} from '@angular/core';
import {ChildComponent} from "./child/child.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit,AfterViewChecked, AfterContentInit, AfterContentChecked{

  ngAfterContentInit(): void {
    console.log("父组件投影内容初始化完毕");
    this.message = 'hello caijunxiang';
  }

  ngAfterContentChecked(): void {
    console.log("父组件投影内容变更检测完毕");
  }

  message: string;

  divContent = "<br><div>慕课网</div>";

  ngAfterViewInit(): void {
    // console.log('父组件内容视图初始化完毕');
    // setTimeout(() => {
    //   this.message = "hello";
    // },0);
  }

  ngAfterViewChecked(): void {
    console.log('父组件的视图变更检测完毕');
  }

  @ViewChild("child1")
  child1: ChildComponent;

  constructor() {

  }

  ngOnInit(): void {
    setInterval(() => {
      this.child1.greeting("Tom");
    },5000);
  }

  title = 'app';
}
