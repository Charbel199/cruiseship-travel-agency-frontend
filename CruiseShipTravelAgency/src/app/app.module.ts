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
    ShipInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    CommonModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD5BmffE1kyaCpqDon2teOQDmxtTHU2hQA'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
