import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]',
})
export class BorderCardDirective {
  private initialColor: string = '#f5f5f5';
  private defaultColor: string = '#009688';
  private defautlStyle: string = 'dashed';
  private defaultHeight: number = 180;

  constructor(private el: ElementRef) {
    this.setBorder(this.initialColor);
    this.setHeight(this.defaultHeight);
    this.setStyle(this.defautlStyle);
  }

  @Input() pkmnBorderCard: { borderColor: string; borderStyle: string }; // Accepts an object

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.pkmnBorderCard.borderColor || this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
    this.setStyle(this.defautlStyle);
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }

  setStyle(style: string) {
    this.el.nativeElement.style.borderStyle = style;
  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = `solid 4px ${color}`;
  }
}
