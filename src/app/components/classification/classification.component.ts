import { Component, OnInit } from '@angular/core';
import {GlobalService} from "../../services/global.service";

@Component({
  selector: 'app-classification',
  templateUrl: './classification.component.html',
  styleUrls: ['./classification.component.css']
})
export class ClassificationComponent implements OnInit {
  newU = {
    name: ''
  };
    classifications: any;
  selected: any;
  constructor(private service: GlobalService) { }

  ngOnInit() {
    this.service.getClassification().subscribe((res) => {
      this.classifications = res;
    });

  }
  select(f: any) {
    this.selected = f;
  }

  delete(f: any) {
    this.service.deleteClassification(f).subscribe((res) => {
      this.ngOnInit();
    })
  }

  create() {
    this.service.createClassification(this.newU).subscribe((res) => {
      this.ngOnInit();
    })
  }

  update() {
    this.service.updateClassification(this.selected).subscribe((res) => {
      this.ngOnInit();
    })
  }

}
