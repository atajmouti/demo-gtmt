
import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

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


  campagnes: Campagne[] = [
    {Id: '1', name: 'Campagne courrier 1'},
    {Id: '2', name: 'Campagne courrier 2'},
    {Id: '3', name: 'Campagne courrier 3'},
    {Id: '4', name: 'Campagne courrier 4'},
    {Id: '5', name: 'Campagne courrier 5'},
  ];

  template = new FormControl();

   days = ['Lundi', 'Mardi','Mecredi', 'Jeud', 'Vendredi', 'Samedi'];


  isLinear: true;
  form: FormGroup;


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


  }

}

