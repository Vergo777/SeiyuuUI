import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SeiyuuDetailsService} from "./seiyuu-details.service";

@Component({
  selector: 'app-seiyuu-details',
  templateUrl: './seiyuu-details.component.html',
  styleUrls: ['./seiyuu-details.component.css']
})
export class SeiyuuDetailsComponent implements OnInit {
  seiyuuDetails: SeiyuuDetails;

  constructor(
    private route: ActivatedRoute,
    private seiyuuDetailsService: SeiyuuDetailsService
  ) { }

  ngOnInit(): void {
    this.getSeiyuuDetails();
  }

  getSeiyuuDetails(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');
    this.seiyuuDetailsService.getSeiyuuDetails(id)
      .subscribe(seiyuuDetails => {
        this.seiyuuDetails = seiyuuDetails;
        seiyuuDetails.voice_acting_roles.sort(((a, b) => a.character.name.localeCompare(b.character.name)));
      });
  }

}
