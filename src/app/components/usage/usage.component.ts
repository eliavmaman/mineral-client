import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../services/global.service";

@Component({
  selector: 'app-usage',
  templateUrl: './usage.component.html',
  styleUrls: ['./usage.component.css']
})
export class UsageComponent implements OnInit {
  newU = {
    name: ''
  };
  usages: any;
  selected: any;
  constructor(private service: GlobalService) { }

  ngOnInit() {
    this.service.getUsages().subscribe((res) => {
      this.usages = res;
    });

  }
  select(f: any) {
    this.selected = f;
  }

  delete(f: any) {
    this.service.deleteUsages(f).subscribe((res) => {
      this.ngOnInit();
    })
  }

  create() {
    this.service.createUsages(this.newU).subscribe((res) => {
      this.ngOnInit();
    })
  }

  update() {
    this.service.updateUsages(this.selected).subscribe((res) => {
      this.ngOnInit();
    })
  }

}
