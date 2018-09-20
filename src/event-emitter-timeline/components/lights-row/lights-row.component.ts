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
	public toggled = new EventEmitter<{ source: number, timeline: TimelineLite }>();

	public get lengthArray() {
		return new Array(this.length);
	}

	public onToggle(source: number, timeline: TimelineLite) {
		let before = this.lights.find((item, index) => index === source - 1);
		let after = this.lights.find((item, index) => index === source + 1);

		if (before) {
			timeline.add(before.toggle(), "start+=0.25");
		}

		if (after) {
			timeline.add(after.toggle(), "start+=0.25");
		}

		this.toggled.emit({ source, timeline });
	}

	public toggle(index: number): TimelineLite {
		let target = this.lights.find((item, i) => i === index);
		if (target) {
			return target.toggle();
		}
	}
}
