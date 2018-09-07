import { Component, Input, QueryList, ViewChildren } from "@angular/core";
import { LightComponent } from "../light/light.component";

@Component({
	selector: "lights-row",
	templateUrl: "./lights-row.component.html",
	styleUrls: ["./lights-row.component.scss"]
})
export class LightsRowComponent {
	@Input() public length: number;

	@ViewChildren(LightComponent)
	public lights: QueryList<LightComponent>;

	public get lengthArray() {
		return new Array(this.length);
	}

	public toggle(source: number) {
		let before = this.lights.find((item, index) => index === source - 1);
		let after = this.lights.find((item, index) => index === source + 1);

		if (before) {
			before.toggle();
		}

		if (after) {
			after.toggle();
		}
	}
}
