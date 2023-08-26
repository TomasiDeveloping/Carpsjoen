import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {FacilityComponent} from "./pages/facility/facility.component";
import {RulesComponent} from "./pages/rules/rules.component";
import {AboutComponent} from "./pages/about/about.component";
import {ImprintComponent} from "./pages/footer/imprint/imprint.component";
import {PrivacyComponent} from "./pages/footer/privacy/privacy.component";
import {ContactComponent} from "./pages/footer/contact/contact.component";
import {ArrivalComponent} from "./pages/arrival/arrival.component";

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'facility', component: FacilityComponent},
  {path: 'rules', component: RulesComponent},
  {path: 'about', component: AboutComponent},
  {path: 'imprint', component: ImprintComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'arrival', component: ArrivalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
