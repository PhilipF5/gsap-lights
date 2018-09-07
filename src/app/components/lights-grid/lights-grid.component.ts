import { Component, Input } from "@angular/core";

@Component({
	selector: "lights-grid",
	templateUrl: "./lights-grid.component.html",
	styleUrls: ["./lights-grid.component.scss"]
})
export class LightsGridComponent {
	@Input() public size: number = 5;

	public get sizeArray() {
		return new Array(this.size);
	}
}
