import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProductPage } from '../pages/product/product';
import { SearchAndCategoryPage } from '../pages/search-and-category/search-and-category';
import { LoginPage } from '../pages/login/login';
import { CartPage } from '../pages/cart/cart';
import { PaymentPage } from '../pages/payment/payment';
import { CompletePage } from '../pages/complete/complete';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Product Page', component : ProductPage},
      { title: 'Search & Categories', component : SearchAndCategoryPage},
      { title: 'Payment', component : PaymentPage},
      { title: 'Login/Register', component : LoginPage},
      { title: 'Checkout Completion', component : CompletePage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }

  gotoCart(){
    this.nav.push(CartPage);
  }
}
