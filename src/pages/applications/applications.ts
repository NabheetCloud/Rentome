import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http ,Headers} from '@angular/http';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { AddProperty } from '../../interfaces/user-options';
import {MyPropertiesPage} from '../my-properties/my-properties';
import { RegisterOptions } from '../../interfaces/user-options';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the ApplicationsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-applications',
  templateUrl: 'applications.html',
})
export class ApplicationsPage {
  property:AddProperty = {};
  users:RegisterOptions=[{}];
  userid: any;
  toast = this.toastCtrl.create({
    message: 'Decision taken successfully',
    duration: 3000,
    position: 'bottom'
  });
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http,
    private storage: Storage, private toastCtrl: ToastController) {
    this.property = navParams.data.item;
    storage.get('userdata').then((val: any) => {
      this.userid = val.id;
      var data = {"propertyid":this.property.id};	
      this.http.post("http://codingshivaay.in/api/rentome/getAllProperties.php", data)
      .subscribe((data1: any) => {
          this.users = JSON.parse(data1._body).id;
        }, error => {
        alert('Sorry can not fetch data at this time, please try later');
        });
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplicationsPage');
  }
  onApprove(id){
    var data = {
      "propertyid":this.property.id,
      "userid":id,
      "status":"Accepted"
    } 
    this.http.post("http://codingshivaay.in/api/rentome/decideproperty.php", data)
    .subscribe(data => {
      this.toast.present();
      this.navCtrl.setRoot(MyPropertiesPage);
      }, error => {
      alert('Sorry can not post at this time, please try later');
      });
   }
   onReject(id){
    var data = {
      "propertyid":this.property.id,
      "userid":id,
      "status":"Rejected"
    } 
    this.http.post("http://codingshivaay.in/api/rentome/decideproperty.php", data)
    .subscribe(data => {
      this.toast.present();
      this.navCtrl.setRoot(MyPropertiesPage);
      }, error => {
      alert('Sorry can not post at this time, please try later');
      });
   }
}
