import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientDashboardComponent } from './components/patient-dashboard/patient-dashboard.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { MedicalRecordsComponent } from './components/medical-records/medical-records.component';


import { UserRegistrationComponent } from './user-registration/user-registration.component';


const routes: Routes = [
  { path: 'dashboard', component: PatientDashboardComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: '**', redirectTo: '/dashboard' },
  { path: 'dashboard', component: PatientDashboardComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'medical-records', component: MedicalRecordsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
