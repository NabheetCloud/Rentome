import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddProperty } from '../../interfaces/user-options';
import { ListPage } from '../list/list';
import { Http ,Headers} from '@angular/http';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
import { INTERNAL_BROWSER_PLATFORM_PROVIDERS } from '@angular/platform-browser/src/browser';
/**
 * Generated class for the ApplyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-apply',
  templateUrl: 'apply.html',
})
export class ApplyPage {
  property:AddProperty = {};
  toast = this.toastCtrl.create({
    message: 'Applied for property successfully',
    duration: 3000,
    position: 'bottom'
  });
  userid: any;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http,
    private storage: Storage, private toastCtrl: ToastController) {
    this.property = navParams.data.item;
    storage.get('userdata').then((val: any) => {
      this.userid = val.id;
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ApplyPage');
  }
 onApply(){
  var data = {
    "userid":this.userid,
    "propertyid":this.property.id,
    "status":"Open"
  } 
  this.http.post("http://codingshivaay.in/api/rentome/applyproperty.php", data)
  .subscribe((data1: any) => {
    var data2: any;
    data2 = JSON.parse(data1._body);
    if(data2.success == "Pass"){
    this.toast = this.toastCtrl.create({
      message: data2.message,
      duration: 3000,
      position: 'bottom'
    });
    this.toast.present();
    this.navCtrl.setRoot(ListPage);}else{
      this.toast = this.toastCtrl.create({
        message: data2.message,
        duration: 3000,
        position: 'bottom'
      });
      this.toast.present();
    }
    }, error => {
    alert('Sorry can not post at this time, please try later');
    });
 }
}
