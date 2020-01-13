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
  dateConstructor(day,month,year,dayAdd,monthAdd,yearAdd){
    let newDay=day;
    let newMonth=month;
    let newYear=year;
    newDay+=dayAdd;
    if(newDay>30){
      newMonth++;
      newDay=newDay-30;
    }
    if(newDay<1){
      newDay=30+newDay;
      newMonth--;
    }
    newMonth+=monthAdd;
    if(newMonth>12){
      newYear++;
      newMonth=newMonth-12;
    }
    if(newMonth<1){
      newYear--;
      newMonth=12+newMonth;
    }
    newYear+=yearAdd;
    return(newDay.toString()+'-'+newMonth.toString()+'-'+newYear.toString());
  }

  ngOnInit() {

    let date = new Date();
    let day=date.getDate();
    let month=date.getMonth()+1;
    let year=date.getFullYear();

    let startDate=this.dateConstructor(day,month,year,-1,0,0);
    let endDate=this.dateConstructor(day,month,year,0,0,1);

    this.evenementService.findByDateEvtBetween(startDate, endDate).subscribe(
      (data: Evenement[]) => {
        this.events = data;
      },
      err => {
        console.log("Error while loading Events");
      }
    );
    startDate=this.dateConstructor(day,month,year,1,0,0);
    endDate=this.dateConstructor(day,month,year,0,-1,0);
    this.publicationService.findByDateBetween(endDate, startDate).subscribe((data: Publication[]) => {
        this.pubs = data;
      },
      err => {
        console.log("Error while loading Publications")
      })
  }

}
