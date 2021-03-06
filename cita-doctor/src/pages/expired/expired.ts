import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the ExpiredPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-expired',
  templateUrl: 'expired.html',
})
export class ExpiredPage {

  constructor(private auth:AuthProvider, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ExpiredPage');
  }

  plans=[{
    plan_name:'Premium Lifetime',
    validity:'unlimited',
    description:'Upgrade to premium and enjoy lifetime benefits'
  }]

}
