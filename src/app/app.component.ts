import { Component, VERSION } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  title = 'Select/ Unselect All Checkboxes in Angular';
  masterSelected:boolean;
  checklist = [
    {id:1,value:'Elenor Anderson',isSelected:false},
    {id:2,value:'Caden Kunze',isSelected:true},
  ]
  checkedList:any;


  constructor(private fb: FormBuilder){}

  checkUncheckAll() {
    // The master checkbox will check/ uncheck all items

    for (var i = 0; i < this.checklist.length; i++) {
      this.checklist[i].isSelected = this.masterSelected;
    }
    this.getCheckedItemList();

  }

  isAllSelected() {
    // check if all checkboxes are checked or not
    this.masterSelected = this.checklist.every(function(item:any) {
      return item.isSelected == true;
    })
    this.getCheckedItemList();
  }

  getCheckedItemList() {
    // Get List of Checked Items
    this.checkedList = [];
    for (var i = 0; i < this.checklist.length; i++) {
      if(this.checklist[i].isSelected)
      this.checkedList.push(this.checklist[i]);
    }
    this.checkedList = JSON.stringify(this.checkedList);
  }

}
