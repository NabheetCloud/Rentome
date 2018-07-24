import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddProperty } from '../../interfaces/user-options';
import { ListPage } from '../list/list';
import { Http ,Headers} from '@angular/http';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the PostPropertyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post-property',
  templateUrl: 'post-property.html',
})
export class PostPropertyPage {
 property:AddProperty = {
    description: '',
    location: '',
    rent: '',
    alcohol: false,
    smoking: false,
    gambling: false,
    anger: false,
    depression: false,
    openness: true,
    score: 1,
    userid: ''

  };
  toast = this.toastCtrl.create({
    message: 'Property added successfully',
    duration: 3000,
    position: 'bottom'
  });
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http,
    private storage: Storage,private toastCtrl: ToastController) {
     storage.get('userdata').then((val: any) => {
    this.property.userid = val.id;
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPropertyPage');
  }
  onPost(){
     var data:AddProperty = this.property;
      if (this.property.description == "" || this.property.location == "" || this.property.rent == ""
      ){
        alert("Please enter description,location and Rent");
        return;
      }
    
      if(this.property.smoking == true){
      this.property.score = this.property.score - 0.18;
      }
      if(this.property.alcohol == true){
      this.property.score = this.property.score - 0.18;
      }
    if(this.property.gambling == true){
      this.property.score = this.property.score - 0.18;
      }
       if(this.property.anger == true){
      this.property.score = this.property.score - 0.18;
      }
       if(this.property.depression == true){
      this.property.score = this.property.score - 0.18;
      }
       if(this.property.openness == true){
      this.property.score = this.property.score + 0.10;
      }
      
      this.http.post("http://codingshivaay.in/api/rentome/addProperty.php", data)
      .subscribe(data => {
        this.toast.present();
        this.navCtrl.setRoot(ListPage);
        }, error => {
        alert('Sorry can not post at this time, please try later');
        });
  }
}
