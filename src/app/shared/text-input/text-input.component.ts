import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.scss'],
})
export class TextInputComponent implements OnChanges {
  @Input()
  label: string;

  @Input()
  type: 'text';

  @Input()
  value: string = '';

  @Output()
  changeValue = new EventEmitter<string>();

  id: string;

  ngOnChanges() {
    this.id = this.label.toLowerCase().replace(' ', '-') + '-text-input';
  }

  updateValue(value: string) {
    this.changeValue.emit(value);
  }
}
