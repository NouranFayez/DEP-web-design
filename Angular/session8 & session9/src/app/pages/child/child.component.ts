import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  text = "typescript"

  @Input() num = 0
  constructor(){
    console.log(this.num)
    console.log('constructor')
  }
  ngOnInit(){
    console.log(this.num)
    console.log('ng on init')
  }
  ngOnChanges(e : Event){
    console.log(e)
    console.log('ng on change')
  }
  ngDoCheck(){
    console.log('ng on Check')
  }
  ngAfterContentInit(){
    console.log('ng afterContent init')
  }
  ngAfterContentChecked(){
    console.log('ng after content checked')
  }
  ngAfterViewInit(){
    console.log('ng after view init')
  }
  ngAfterViewChecked(){
    console.log('ng after view checked')
  }
   ngOnDestroy(){
    console.log('ng on destroy')
  }
  


}
