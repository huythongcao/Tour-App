import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
} from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
})
export class InputFormatDirective {
  @Input('appInputFormat') format;
  @Output('ngModelChange') modelChange = new EventEmitter();

  @HostListener('blur', ['$event']) onBlur(e) {
    let nativeEl = this.el.nativeElement;

    if (this.format === 'capitalize') {
      let newValue = nativeEl.value = nativeEl.value
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.substring(1))
        .join(' ');

      nativeEl.value = newValue;
      this.modelChange.emit(newValue);
    }
    if (this.format === 'lowerCase') {
      let newValue = nativeEl.value.toLowerCase();
      nativeEl.value = newValue;
      this.modelChange.emit(newValue);
      return;
    }
    if (this.format === 'upperCase') {
      let newValue = nativeEl.value.toUpperCase();
      nativeEl.value = newValue;
      this.modelChange.emit(newValue);
      return;
    }
  }

  constructor(private el: ElementRef) {
    // console.log(el);
  }
}
