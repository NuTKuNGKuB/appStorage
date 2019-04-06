import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GetvaluePage } from '../getvalue/getvalue';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public storage:Storage) {
    storage.ready().then(
      ()=>{
        //เซ็ตข้อมูลลงสตรอเลต
        storage.set("username",'Nitipong');
        storage.set("studentId",'6042040906');
      }
    );
  }
  gotoGetValue(){
    this.navCtrl.push(GetvaluePage);

  }
}
