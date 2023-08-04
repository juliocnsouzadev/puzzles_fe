import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-property-thumbnail',
  templateUrl: './property-thumbnail.component.html',
  styleUrls: ['./property-thumbnail.component.css']
})
export class PropertyThumbnailComponent {

  @Input() inpProp: any;
  @Output() outpProp = new EventEmitter();

  handleClick() {
    this.outpProp.emit('foo');
  }


}
