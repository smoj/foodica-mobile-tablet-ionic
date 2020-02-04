import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ProductPage } from '../pages/product/product';
import { SearchAndCategoryPage } from '../pages/search-and-category/search-and-category';
import { LoginPage } from '../pages/login/login';
import { CartPage } from '../pages/cart/cart';
import { PaymentPage } from '../pages/payment/payment';
import { CompletePage } from '../pages/complete/complete';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ProductPage,
    SearchAndCategoryPage,
    LoginPage,
    CartPage,
    PaymentPage,
    CompletePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ProductPage,
    SearchAndCategoryPage,
    LoginPage,
    CartPage,
    PaymentPage,
    CompletePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
