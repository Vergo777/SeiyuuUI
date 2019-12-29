import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-roles-list-element',
  templateUrl: './roles-list-element.component.html',
  styleUrls: ['./roles-list-element.component.css']
})
export class RolesListElementComponent implements OnInit {
  @Input() characterImageUrl: string;
  @Input() characterName: string;
  @Input() animeUrl: string;
  @Input() animeName: string;

  constructor() { }

  ngOnInit() {
  }

}
