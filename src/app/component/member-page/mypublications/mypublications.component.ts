import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/service/storage.service';
import { Publication } from 'src/app/models/Publication';
import { MembreReturn } from 'src/app/models/MembreReturn';

@Component({
  selector: 'app-mypublications',
  templateUrl: './mypublications.component.html',
  styleUrls: ['./mypublications.component.scss']
})
export class MypublicationsComponent implements OnInit {
  member:MembreReturn=this.storageService.read("userInfo");
  publications:Publication[];
  constructor(private storageService:StorageService) { }

  ngOnInit() {
    
  }

}
