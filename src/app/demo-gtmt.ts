
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

interface Campagne {
  Id: string;
  name: string;
}

@Component({
  selector: 'demo-gtmt',
  templateUrl: 'demo-gtmt.html',
  styleUrls: ['demo-gtmt.scss']
})
export class DemoGTMT implements OnInit {
  title = 'ng-gtmt';


  campagnes = [
    'Campagne courrier 1',
    'Campagne courrier 2',
    'Campagne courrier 3',
    'Campagne courrier 4',
    'Campagne courrier 5'
  ];

  template = new FormControl();

   days = ['Lundi', 'Mardi','Mecredi', 'Jeud', 'Vendredi', 'Samedi'];


  isLinear: true;
  form: FormGroup;
  filteredOptions: Observable<string[]>;


  constructor(
    private _formBuilder: FormBuilder,
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer,
    private domSanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      'logolp_part',
      sanitizer.bypassSecurityTrustResourceUrl('./assets/logolp_part.svg'));
  }

  ngOnInit() {
    this.form = this._formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      frequence: ['', Validators.required],
      frequencenature: [''], // weekly or monthly
      startdate: [''],
      enddate: [''],
      weekday: [''],
      monthday: [''],
      EndDate: ['']    
    });
    this.filteredOptions = this.template.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

  }
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.campagnes.filter(campagne => campagne.toLowerCase().indexOf(filterValue) === 0);
  }
}

