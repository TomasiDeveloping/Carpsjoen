import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule} from "@angular/router";
import { NavigationComponent } from './pages/navigation/navigation.component';
import {AppRoutingModule} from "./app-routing.module";
import { HomeComponent } from './pages/home/home.component';
import { FacilityComponent } from './pages/facility/facility.component';
import { RulesComponent } from './pages/rules/rules.component';
import { AboutComponent } from './pages/about/about.component';
import {YouTubePlayerModule} from "@angular/youtube-player";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { FooterComponent } from './pages/footer/footer.component';
import { ImprintComponent } from './pages/footer/imprint/imprint.component';
import { PrivacyComponent } from './pages/footer/privacy/privacy.component';
import { ContactComponent } from './pages/footer/contact/contact.component';
import {ReactiveFormsModule} from "@angular/forms";
import { ArrivalComponent } from './pages/arrival/arrival.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    FacilityComponent,
    RulesComponent,
    AboutComponent,
    FooterComponent,
    ImprintComponent,
    PrivacyComponent,
    ContactComponent,
    ArrivalComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    YouTubePlayerModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
