import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDroppable]'
})
export class DroppableDirective {
  @HostBinding('class.open') isOpen: boolean = false;

  @HostListener('click')
  changeState() {
    this.isOpen = !this.isOpen;
  }

  constructor() {}
}
