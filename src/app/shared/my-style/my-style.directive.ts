import { Directive, ElementRef, Input, Renderer, HostListener } from '@angular/core';

@Directive({
	selector: '[myStyle]'
})

export class StyleDirective {

	private _defaultColor = 'red';

	constructor(private el: ElementRef, private renderer: Renderer){}

	@Input('myStyle') styleColor: string;

	@Input() set defaultColor(colorName: string){
	  this._defaultColor = colorName || this._defaultColor;
	}

	@HostListener('mouseenter') onMouseEnter() {
		this.changeStyle(this.styleColor || this._defaultColor);
	}

	@HostListener('mouseleave') onMouseLeave() {
		this.changeStyle(null);
	}

	private changeStyle(color: string) {
		this.renderer.setElementStyle(this.el.nativeElement, 'background-color', color);
	}
}