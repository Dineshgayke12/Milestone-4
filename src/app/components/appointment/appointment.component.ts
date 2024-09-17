import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../appointment.service';
@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent implements OnInit{

  appointments: any[] = [];

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe(data => {
      this.appointments = data;
    });
  }
}
