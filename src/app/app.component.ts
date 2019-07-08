import { Component, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject(HttpClient) public ht){

  }
  title = 'task3';
  dataInfo:object[]
  info:object[]
  qnty:number=0;
  ngOnInit () {
    this.ht.get('./assets/data.json').subscribe(
      data => {
        this.dataInfo = data as object [];	 // FILL THE ARRAY WITH DATA.
        //  console.log(this.arrBirds[1]);
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );
  }

  fun1(){
    this.ht.get('./assets/data.json').subscribe((dt)=>{
      this.info = (dt)
    })
  }
}
