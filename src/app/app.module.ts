import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { ApplyPage } from '../pages/apply/apply';
import { ApplicationsPage } from '../pages/applications/applications';
import {RegistrationPage } from '../pages/registration/registration';
import {MyPropertiesPage } from '../pages/my-properties/my-properties';
import {PostPropertyPage } from '../pages/post-property/post-property';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegistrationPage,
    MyPropertiesPage,
    ApplyPage,
    ApplicationsPage ,
    PostPropertyPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
     IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    RegistrationPage, 
    MyPropertiesPage,
    ApplyPage,
    ApplicationsPage ,
    PostPropertyPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    IonicStorageModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
