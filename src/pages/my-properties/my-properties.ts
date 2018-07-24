import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Http ,Headers} from '@angular/http';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { AddProperty } from '../../interfaces/user-options';
import { ApplicationsPage } from '../applications/applications';
import { LoadingController } from 'ionic-angular';
/**pply
 * Generated class for the MyPropertiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-my-properties',
  templateUrl: 'my-properties.html',
})
export class MyPropertiesPage {
  loader = this.loading.create({
    content: 'Getting your properties!',
  });
  properties:any = [{}];
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public http: Http,private storage: Storage,public loading: LoadingController) {
      this.loader.present();
  	 storage.get('userdata').then((val) => {
  	 var data = {"userid":val.id};	
    this.http.post("http://codingshivaay.in/api/rentome/myProperties.php", data)
  .subscribe((data1: any) => {
      this.properties = JSON.parse(data1._body).id;
      this.loader.dismiss();
    }, error => {
      this.loader.dismiss();
    alert('Sorry can not fetch data at this time, please try later');
    });
  });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyPropertiesPage');
  }
  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ApplicationsPage, {
      item: item
    });
  }
}
