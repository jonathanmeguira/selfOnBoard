import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {SecurityService} from '../security.service';
import {
  GeneralSettingsComponent,
  GeneralSettingsWithCDRComponent,
  GeneralSettingsWithoutCDRComponent,
  SpecialAttachmentsComponent
} from './templates/templates.components';
import {Policy} from '../../model/company-policy';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css'],
  providers: [SecurityService],
  entryComponents: [GeneralSettingsComponent, GeneralSettingsWithCDRComponent, GeneralSettingsWithoutCDRComponent, SpecialAttachmentsComponent]
})

export class GeneralComponent implements OnInit{
  mainPolicySettings: Policy = new Policy();

  ngOnInit() {
    this.securityService.getSettings().subscribe(
      result => {
        this.mainPolicySettings = result;

        console.log(this.mainPolicySettings);
      }, error => {
        console.log('an error occurred');
      }
    );
  }
  constructor(private securityService: SecurityService, private changeDetection: ChangeDetectorRef) {
  }
  resetToDefaultValues(){
    this.mainPolicySettings = new Policy();
  }
  saveSettings = () => {
    // setting all values on cdr to be the same
    // for (const setting in this.mainPolicySettings.AttachmentsProcessedLevels) {
    //   this.mainPolicySettings.AttachmentsProcessedLevels[setting] = this.mainPolicySettings.AttachmentsProcessedLevels['documents'];
    // }
    this.securityService.saveSettings(this.mainPolicySettings).subscribe(
      success => {
        console.log(success);
      }, error => {
        console.log(error);
      }
    );
  }


}
