import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { district, views } from 'src/app/shared/data';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Observable } from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import {MatAutocompleteSelectedEvent} from '@angular/material/autocomplete';
import {MatChipInputEvent} from '@angular/material/chips';
import { InputData_1 } from 'src/app/shared/model';
import { PredictService } from 'src/app/service/predict.service';

export interface Ward {
  id: string;
  Name: string;
}

export interface Project {
  id: string;
  Name: string;
}

@Component({
  selector: 'app-predict-apartment',
  templateUrl: './predict-apartment.component.html',
  styleUrls: ['./predict-apartment.component.css']
})
export class PredictApartmentComponent implements OnInit {

  separatorKeysCodes: number[] = [ENTER, COMMA];
  separatorKeysCodes_1: number[] = [ENTER, COMMA];
  fruitCtrl = new FormControl();
  fruitCtrl_1 = new FormControl();
  filteredFruits: Observable<string[]>;
  filteredFruits_1: Observable<string[]>;
  view: string[] = ['Sông'];
  views: string[] = ['Hồ bơi','Nội khu', 'Sông','Bitexco', 'L81'];
  special : string[] = ['Sân vườn'];
  specials: string[] = ['Sân vườn','Thang máy riêng','Hồ bơi'];

  @ViewChild('fruitInput')
  fruitInput!: ElementRef<HTMLInputElement>;

  @ViewChild('specailInput')
  specailInput!: ElementRef<HTMLInputElement>;

  Result!: string
  predictForm!: FormGroup
  data = district;

  District!: string
  fv !: any;


  constructor(private formBuilder: FormBuilder, private router: Router, private service: PredictService) {
    this.predictForm = this.formBuilder.group({
      year: ["2022-12", [Validators.required]],
      district: ["Quận 1", [Validators.required]],
      wards: ["Cầu Kho" , [Validators.required]],
      street: ["Võ Văn Kiệt"],
      area: [77 , [Validators.required]],
      home_orentation: ["Đông - Nam"],
      floor: [1 , [Validators.required]],
      bedroom: [2 , [Validators.required]],
      toilet: [2 , [Validators.required]],
      furniture: ["Đầy đủ" , [Validators.required]],
      legal: ["Hợp đồng mua bán" , [Validators.required]],
      balony_orentation: ['Tây - Bắc'],
      nameProject: ['Zenity'],
    });

    this.fv = this.predictForm.value

    this.filteredFruits = this.fruitCtrl.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.views.slice())),
    );

    this.filteredFruits_1 = this.fruitCtrl_1.valueChanges.pipe(
      startWith(null),
      map((fruit: string | null) => (fruit ? this._filter(fruit) : this.specials.slice())),
    );
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.view.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl.setValue(null);
  }

  add_1(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.special.push(value);
    }

    // Clear the input value
    event.chipInput!.clear();

    this.fruitCtrl_1.setValue(null);
  }


  remove(fruit: string): void {
    const index = this.view.indexOf(fruit);

    if (index >= 0) {
      this.view.splice(index, 1);
    }
  }

  remove_1(fruit: string): void {
    const index = this.special.indexOf(fruit);

    if (index >= 0) {
      this.special.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.view.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.fruitCtrl.setValue(null);
  }

  selected_1(event: MatAutocompleteSelectedEvent): void {
    this.special.push(event.option.viewValue);
    this.specailInput.nativeElement.value = '';
    this.fruitCtrl_1.setValue(null);
  }

  ngOnInit(): void {
  }

  show_menu = false;

  show_list() {

    if(this.show_menu === false)
      this.show_menu = true;
    else {
      this.show_menu = false;
    }
  }

  show_menu_1 = false;

  show_list_1() {

    if(this.show_menu_1 === false)
      this.show_menu_1 = true;
    else {
      this.show_menu_1 = false;
    }
  }

  show_menu_2 = false;

  show_list_2() {

    if(this.show_menu_2 === false)
      this.show_menu_2 = true;
    else {
      this.show_menu_2 = false;
    }
  }

  show_menu_3 = false;

  show_list_3() {

    if(this.show_menu_3 === false)
      this.show_menu_3 = true;
    else {
      this.show_menu_3 = false;
    }
  }
  show_menu_4 = false;

  show_list_4() {

    if(this.show_menu_4 === false)
      this.show_menu_4 = true;
    else {
      this.show_menu_4 = false;
    }
  }

  getWard(): Ward[] {

    this.fv = this.predictForm.value;
    let re : Ward[] = [];
    this.data.forEach(e => {
      if(e.Name === this.fv.district)
      {
        re = e.Wards;
      }
    })
    return re;
  }

  getProject():Project[] {
    this.fv = this.predictForm.value;
    let re : Project[] = [];

    this.data.forEach(e => {
      if(e.Name === this.fv.district)
      {
        re = e.Project;
      }
    })

    return re;
  }

  RESULT!: String;

  submit() {
    if (this.predictForm.invalid) {
      return;
    }

    const fv = this.predictForm.value;
    const data: InputData_1 = {
      Year: Number(String(fv.year).substring(0,4)),
      District: fv.district,
      Ward: fv.wards,
      Street: fv.street,
      Area: fv.area,
      HomeOrientation: fv.home_orentation,
      Floor: fv.floor,
      BedRoom: fv.bedroom,
      Toilet: fv.toilet,
      Interior: fv.furniture,
      Legal: fv.legal,
      BalconyOrientation: fv.balony_orentation,
      View: this.view.join(','),
      Special: this.special.join(','),
      NameProject: fv.nameProject,
    }

    this.service.getPreidict_1(data).subscribe(e =>{
      this.RESULT = e;
      this.RESULT = this.RESULT.toString().substring(0,5);
    })
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.views.filter(fruit => fruit.toLowerCase().includes(filterValue));
  }

}
