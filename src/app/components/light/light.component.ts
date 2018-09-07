import { Component, ElementRef, NgZone, OnInit, ViewChild } from "@angular/core";
import { Elastic, TimelineLite, TweenLite } from "gsap";

@Component({
	selector: "light",
	templateUrl: "./light.component.html",
	styleUrls: ["./light.component.scss"],
})
export class LightComponent implements OnInit {
	public get isActive(): boolean {
		return this._active;
	}

	public get isAnimating(): boolean {
		return this._animating;
	}

	private _active: boolean;
	private _animating: boolean;

	@ViewChild("light")
	private _light: ElementRef;

	private get light(): HTMLElement {
		return this._light.nativeElement;
	}

	constructor(private ngZone: NgZone) {}

	ngOnInit() {
		this._active = Math.random() > 0.5;
		if (this.isActive) {
			TweenLite.set(this.light, { className: "active" });
		}
	}

	public activate(): TweenLite {
		return TweenLite.fromTo(this.light, 0.5, { className: "" }, { className: "active" });
	}

	public inactivate(): TweenLite {
		return TweenLite.fromTo(this.light, 0.5, { className: "active" }, { className: "" });
	}

	public toggle() {
		if (this.isAnimating) {
			return;
		}

		this._animating = true;
		let animation = this.isActive ? this.inactivate() : this.activate();
		this._active = !this.isActive;
		let timeline = new TimelineLite()
			.to(this.light, 0.15, { scale: 0.8 }, "start")
			.to(this.light, 2, { scale: 1, ease: Elastic.easeOut.config(1, 0.3) });

		timeline.add(animation, "start").add(() => this.ngZone.run(() => {
			this._animating = false;
		}));
	}
}
