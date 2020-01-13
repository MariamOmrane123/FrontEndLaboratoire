import {Component, OnInit} from '@angular/core';
import {EvenementService} from "../../service/evenement.service";
import {Evenement} from "../../models/Evenement";
import {PublicationService} from "../../service/publication.service";
import {Publication} from "../../models/Publication";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  events: Evenement[];
  pubs: Publication[];

  constructor(private evenementService: EvenementService, private publicationService: PublicationService) {

  }

  ngOnInit() {

    let date = new Date();
    let startDate = (date.getDate() - 1).toString() + "-" + (date.getMonth() + 1).toString() + "-" + date.getFullYear().toString();
    let endDate = (date.getDate() + 1).toString() + "-" + (date.getMonth() + 1).toString() + "-" + (date.getFullYear() + 1).toString();
    this.evenementService.findByDateEvtBetween(startDate, endDate).subscribe(
      (data: Evenement[]) => {
        this.events = data;
      },
      err => {
        console.log("Error while loading Events");
      }
    );
    startDate = (date.getDate() + 1).toString() + "-" + date.getMonth().toString() + "-" + date.getFullYear().toString();
    endDate = date.getDate().toString() + "-" + (date.getMonth() - 1).toString() + "-" + date.getFullYear().toString();

    this.publicationService.findByDateBetween(startDate, endDate).subscribe((data: Publication[]) => {
        this.pubs = data;
      },
      err => {
        console.log("Error while loading Publications")
      })
  }

}
