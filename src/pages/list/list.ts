import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http ,Headers} from '@angular/http';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { AddProperty } from '../../interfaces/user-options';
import { ApplyPage } from '../apply/apply';
import { LoadingController } from 'ionic-angular';
@Component({
  selector: 'page-list',
  templateUrl: 'list.html'
})
export class ListPage {
  properties:any = [{}];
  loader = this.loading.create({
    content: 'Getting Relevant Properties',
  });
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http,private storage: Storage,public loading: LoadingController) {
    this.loader.present();
  storage.get('userdata').then((val) => {
     var data = {"score":val.score};  
    this.http.post("http://codingshivaay.in/api/rentome/homeProperties.php", data)
  .subscribe((data1 :any) => {
       
    var data2: any;
    data2 = JSON.parse(data1._body);
    this.properties = data2.userdata;
    this.loader.dismiss();
    }, error => {
      this.loader.dismiss();
    alert('Sorry can not fetch data at this time, please try later');
    });
  });
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ApplyPage, {
      item: item
    });
  }
}
