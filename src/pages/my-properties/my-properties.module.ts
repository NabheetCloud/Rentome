import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyPropertiesPage } from './my-properties';

@NgModule({
  declarations: [
    MyPropertiesPage,
  ],
  imports: [
    IonicPageModule.forChild(MyPropertiesPage),
  ],
})
export class MyPropertiesPageModule {}
