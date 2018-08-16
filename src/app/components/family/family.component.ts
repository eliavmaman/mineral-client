import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../services/global.service";

@Component({
  selector: 'app-family',
  templateUrl: './family.component.html',
  styleUrls: ['./family.component.css']
})
export class FamilyComponent implements OnInit {
  newF = {
    name: ''
  };
  families: any;
  selected: any;
  constructor(private service: GlobalService) { }

  ngOnInit() {
    this.service.getFamilies().subscribe((res) => {
      this.families = res;
    });

  }
  select(f: any) {
    this.selected = f;
  }

  delete(f: any) {
    this.service.deleteFamiliy(f).subscribe((res) => {
      this.ngOnInit();
    })
  }

  create() {
    this.service.createFamiliy(this.newF).subscribe((res) => {
      this.ngOnInit();
    })
  }

  update() {
    this.service.updateFamiliy(this.selected).subscribe((res) => {
      this.ngOnInit();
    })
  }
}
