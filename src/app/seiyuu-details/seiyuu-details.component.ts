import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {SeiyuuDetailsService} from "./seiyuu-details.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-seiyuu-details',
  templateUrl: './seiyuu-details.component.html',
  styleUrls: ['./seiyuu-details.component.css']
})
export class SeiyuuDetailsComponent implements OnInit {
  private seiyuuDetails: SeiyuuDetails;

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
        console.log(seiyuuDetails);
        this.seiyuuDetails = seiyuuDetails
      });
  }

}
