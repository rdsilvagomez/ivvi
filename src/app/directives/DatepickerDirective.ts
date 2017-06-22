 
import {
  Component, 
  ElementRef,
  Directive,
  Output,
  EventEmitter
} from '@angular/core'; ;
declare var jQuery:any;
declare var $:any;
@Directive({
  selector: '[datepickerdrtv]'
})
export class DatepickerDirective {
  @Output()
  change:EventEmitter<string> = new EventEmitter();
  
  constructor(private elementRef:ElementRef) {
  }
  
  ngOnInit() {
  
    $(this.elementRef.nativeElement).datepicker({
      onSelect: (dateText:any) => {
        this.change.emit(dateText);
      }
    });
  }
}