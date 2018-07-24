import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegistrationPage } from '../registration/registration';
import { UserOptions } from '../../interfaces/user-options';
import { ListPage } from '../list/list';
import { Http ,Headers} from '@angular/http';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
 login: UserOptions = { email: '', password: '' };
  loader = this.loading.create({
  content: 'Rentome Login Validating!',
});
toast = this.toastCtrl.create({
  message: 'User was validated successfully',
  duration: 3000,
  position: 'bottom'
});
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public http: Http,private storage: Storage,public loading: LoadingController,private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
onSignup(){
  

  this.navCtrl.push(RegistrationPage);
}
onLogin(){
  var data:UserOptions = this.login;
  if (this.login.email == "" ||  this.login.password == ""){
  alert("Please enter all fields");
  return;
}
this.loader = this.loading.create({
  content: 'Rentome Login Validating!',
});
this.loader.present();
  this.http.post("http://codingshivaay.in/api/rentome/validateLogin.php", data)
  .subscribe( (data1: any)=> {
    var data2: any;
     data2 = JSON.parse(data1._body);
     this.loader.dismiss();
     if(data2.success == "Pass"){
     var data3:any;
     data3 = data2.userdata;
     
     this.storage.set('userdata', data3);
    this.navCtrl.setRoot(ListPage);
    this.toast = this.toastCtrl.create({
      message: 'User was validated successfully',
      duration: 3000,
      position: 'bottom'
    });
     this.toast.present();
    
   
     }else{
      this.toast = this.toastCtrl.create({
        message: data2.message,
        duration: 3000,
        position: 'bottom'
      });
       this.toast.present();
     }
    }, error => {
      this.loader.dismiss(); 
    alert('Sorry can not register at this time, please try later');
    });
//window.open("http://localhost:3000");
//	
	}
}
