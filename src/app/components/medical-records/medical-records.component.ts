import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-medical-records',
  templateUrl: './medical-records.component.html',
  styleUrl: './medical-records.component.css'
})
export class MedicalRecordsComponent implements OnInit {
  medicalRecords: any[] = [
    { id: 1, details: 'General Checkup', date: '2024-09-10' },
    { id: 2, details: 'Blood Test', date: '2024-09-12' }
  ];

  constructor() { }

  ngOnInit(): void {}
}