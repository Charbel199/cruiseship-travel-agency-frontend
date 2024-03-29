import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProfileComponent } from './profile/profile.component';
import { CruiseShipsListComponent } from './cruise-ships-list/cruise-ships-list.component';
import { RegisterComponent } from './register/register.component';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { TravelPlanDetailsComponent } from './travel-plan-details/travel-plan-details.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ShipInfoComponent } from './ship-info/ship-info.component';
import { AgmCoreModule } from '@agm/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { RatingComponent } from './rating/rating.component';
import { ReservationComponent } from './reservation/reservation.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import { AddtravelplanComponent } from './addtravelplan/addtravelplan.component';
import { AddstopComponent } from './addstop/addstop.component';
import { AddcrewmemberComponent } from './addcrewmember/addcrewmember.component';
import { ReservationConfirmationComponent } from './reservation-confirmation/reservation-confirmation.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ProfileComponent,
    CruiseShipsListComponent,
    RegisterComponent,
    LoginComponent,
    TravelPlanDetailsComponent,
    PageNotFoundComponent,
    ShipInfoComponent,
    RatingComponent,
    ReservationComponent,
    AdminDashboardComponent,
    AddtravelplanComponent,
    AddstopComponent,
    AddcrewmemberComponent,
    ReservationConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyChMM60kXKRMDDbKEt2hIBMfN2MC9QTy2Q'
    }),
    NoopAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
