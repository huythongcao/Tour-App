import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input("name") text;
  @Input("type") type;
  @Input("colorStyle") colorStyle;
  @Input("disabled") disabled;

  @Output("onClick") onClick = new EventEmitter();

  constructor() { }
 
  ngOnInit(): void {
  }

  handleClick() {
    this.onClick.emit('Some data')
  }

}
