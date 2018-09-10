import { Component, ElementRef, Input, OnChanges } from "@angular/core";
import { TweenMax } from "gsap";

@Component({
	selector: "ng-button",
	templateUrl: "./button.component.html",
	styleUrls: ["./button.component.scss"],
})
export class ButtonComponent implements OnChanges {
	@Input()
	public highlight: boolean;
	@Input()
	public text: string;

	private flashAnimation: TweenMax;

	private get elem(): HTMLElement {
		return this._elem.nativeElement;
	}

	constructor(private _elem: ElementRef) {}

	ngOnChanges() {
		if (this.highlight) {
			this.startFlashing();
		} else {
			this.stopFlashing();
		}
	}

	public onClick() {
		TweenMax.to(this.elem, 0.25, { scale: 0.95 })
			.repeat(1)
			.yoyo(true);
	}

	private startFlashing() {
		return (this.flashAnimation = TweenMax.to(this.elem.querySelector("div"), 0.25, { className: "+=flash" })
			.repeat(-1)
			.yoyo(true));
	}

	private stopFlashing() {
		if (this.flashAnimation) {
			this.flashAnimation.kill();
		}

		this.flashAnimation = undefined;
		return TweenMax.to(this.elem.querySelector("div"), 0.1, { className: "-=flash" });
	}
}
