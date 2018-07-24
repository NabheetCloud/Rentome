import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterOptions } from '../../interfaces/user-options';
import { LoginPage } from '../login/login';
import { Http ,Headers} from '@angular/http';
import { LoadingController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})
export class RegistrationPage {
  loader = this.loading.create({
    content: 'Wait while we register you!',
  });
  toast = this.toastCtrl.create({
    message: 'User registered successfully',
    duration: 3000,
    position: 'bottom'
  });
 register: RegisterOptions = { name: '',
    email: '',
    password:'',
    repeatPassword:'',
    currency:'',
    genomeuser:'' };
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: Http,public loading: LoadingController,private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {

  }
    onSignup(){
      var data:RegisterOptions = this.register;
      if (this.register.email == "" || this.register.name == "" || this.register.password == ""
        || this.register.repeatPassword == "" || this.register.genomeuser ==""){
        alert("Please enter all fields");
        return;
      }
      if( this.register.password != this.register.repeatPassword){
        alert("Please enter same password!");
        return; 
      }
      this.loader = this.loading.create({
        content: 'Wait while we register you!',
      });
      this.loader.present();
      this.http.post("http://codingshivaay.in/api/rentome/RegisterUser.php", data)
      .subscribe((data  : any)=> {
        var data2: any;
        data2 = JSON.parse(data._body);
        this.loader.dismiss();
        if(data2.success =="error"){
          alert(data2.message);
        }else{
          this.navCtrl.setRoot(LoginPage);
          this.toast.present();
        }  
        
        
        
        }, error => {
          this.loader.dismiss();
        alert('Sorry can not register at this time, please try later');
        });
      

    }
}
