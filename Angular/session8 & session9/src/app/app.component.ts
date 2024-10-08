import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'session8';

  constructor(private translate : TranslateService){

  }

  handleLang(lang:any){
    this.translate.use(lang)
  }
}
