import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ProfileComponent} from './profile/profile.component';
import {CruiseShipsListComponent} from './cruise-ships-list/cruise-ships-list.component';
import {RegisterComponent} from './register/register.component';
import {LoginComponent} from './login/login.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {TravelPlanDetailsComponent} from './travel-plan-details/travel-plan-details.component';
import {ShipInfoComponent} from "./ship-info/ship-info.component";
import {ReservationComponent} from "./reservation/reservation.component";
import {AdminDashboardComponent} from "./admin-dashboard/admin-dashboard.component";
import {AddtravelplanComponent} from "./addtravelplan/addtravelplan.component";
import {AddcrewmemberComponent} from "./addcrewmember/addcrewmember.component";
import {AddstopComponent} from "./addstop/addstop.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'cruiseships', component: CruiseShipsListComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'travelplan/:id', component: TravelPlanDetailsComponent},
  {path: 'shipInfo/:id', component: ShipInfoComponent},
  {path: 'book', component: ReservationComponent},
  {path: 'admin', component: AdminDashboardComponent},
  {path: 'addtravelplan', component: AddtravelplanComponent},
  {path: 'addstop', component: AddstopComponent},
  {path: 'addcrewmember', component: AddcrewmemberComponent},
  {path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
