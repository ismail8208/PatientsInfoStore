import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-test-from',
  templateUrl: './test-from.component.html',
  styleUrls: ['./test-from.component.css']
})
export class TestFromComponent implements OnInit {

  patientForm = this.fb.group({
    id: 5,
    name: [''],
    fileNo: [''],
    citizenId: [''],
    birthdate: [''],
    gender: [''],
    natinality: [''],
    phoneNumber: [''],
    email: [''],
    country: [''],
    city: [''],
    street: [''],
    address1: [''],
    address2: [''],
    contactPerson: [''],
    contactRelation: [''],
    contactPhone: [''],
    firstVisitDate: [''],
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.patientForm.value);
  }


}
