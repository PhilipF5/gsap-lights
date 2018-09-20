import { Component, EventEmitter, Input, Output, QueryList, ViewChildren } from "@angular/core";
import { TimelineLite } from "gsap";
import { LightComponent } from "../light/light.component";

@Component({
	selector: "lights-row",
	templateUrl: "./lights-row.component.html",
	styleUrls: ["./lights-row.component.scss"],
})
export class LightsRowComponent {
	@Input()
	public length: number;
	@ViewChildren(LightComponent)
	public lights: QueryList<LightComponent>;
	@Output()
	public toggled: EventEmitter<number> = new EventEmitter<number>();

	public get lengthArray() {
		return new Array(this.length);
	}

	public onToggle(source: number) {
		let before = this.lights.find((item, index) => index === source - 1);
		let after = this.lights.find((item, index) => index === source + 1);

		if (before) {
			before.toggle();
		}

		if (after) {
			after.toggle();
		}

		this.toggled.emit(source);
	}

	public toggle(index: number): TimelineLite {
		let target = this.lights.find((item, i) => i === index);
		if (target) {
			return target.toggle();
		}
	}
}
