import { Component, Input } from "@angular/core";

@Component({
	selector: "lights-row",
	templateUrl: "./lights-row.component.html",
	styleUrls: ["./lights-row.component.scss"]
})
export class LightsRowComponent {
	@Input() public length: number;

	public get lengthArray() {
		return new Array(this.length);
	}
}
