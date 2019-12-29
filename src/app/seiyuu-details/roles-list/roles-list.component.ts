import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-roles-list',
  templateUrl: './roles-list.component.html',
  styleUrls: ['./roles-list.component.css']
})
export class RolesListComponent implements OnInit {
  @Input() voiceActingRoles: VoiceActingRole[];

  constructor() { }

  ngOnInit() {
    console.log(this.voiceActingRoles);
  }

}
