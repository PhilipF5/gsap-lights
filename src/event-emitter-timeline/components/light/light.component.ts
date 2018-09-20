import { Component, ElementRef, EventEmitter, NgZone, OnInit, Output, ViewChild } from "@angular/core";
import { Elastic, TimelineLite, TweenLite } from "gsap";

@Component({
	selector: "light",
	templateUrl: "./light.component.html",
	styleUrls: ["./light.component.scss"],
})
export class LightComponent implements OnInit {
	@Output()
	public toggled = new EventEmitter<TimelineLite>();

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

	private get elem(): HTMLElement {
		return this._elem.nativeElement;
	}

	private get light(): HTMLElement {
		return this._light.nativeElement;
	}

	constructor(private _elem: ElementRef, private ngZone: NgZone) {}

	ngOnInit() {
		this.setState();
	}

	public activate(): TweenLite {
		return TweenLite.fromTo(this.light, 0.5, { className: "" }, { className: "active" });
	}

	public inactivate(): TweenLite {
		return TweenLite.fromTo(this.light, 0.5, { className: "active" }, { className: "" });
	}

	public onClick() {
		if (this.isAnimating) {
			return;
		}

		let timeline = new TimelineLite()
			.to(this.light, 0.15, { scale: 0.8 }, "start")
			.to(this.light, 2, { scale: 1, ease: Elastic.easeOut.config(1, 0.3) });

		timeline.add(this.toggle(), "start");
		this.toggled.next(timeline);
	}

	public reset() {
		this.setState();
	}

	public toggle() {
		this._animating = true;
		let animation = this.isActive ? this.inactivate() : this.activate();
		this._active = !this.isActive;

		return new TimelineLite().add(animation).add(() =>
			this.ngZone.run(() => {
				this._animating = false;
			})
		);
	}

	private setState() {
		this._active = Math.random() > 0.5;
		if (this.isActive) {
			TweenLite.set(this.light, { className: "active" });
		} else {
			TweenLite.set(this.light, { className: "" });
		}
	}
}
