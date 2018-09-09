import { Component, ElementRef, Input } from "@angular/core";
import { TweenMax } from "gsap";

@Component({
	selector: "ng-button",
	templateUrl: "./button.component.html",
	styleUrls: ["./button.component.scss"],
})
export class ButtonComponent {
	@Input() text: string;

	private get elem(): HTMLElement {
		return this._elem.nativeElement;
	}

	constructor(private _elem: ElementRef) {}

	public onClick() {
		TweenMax.to(this.elem, 0.25, { scale: 0.95 }).repeat(1).yoyo(true);
	}
}
