import { Component, Input, QueryList, ViewChildren } from "@angular/core";
import { LightsRowComponent } from "../lights-row/lights-row.component";

@Component({
	selector: "lights-grid",
	templateUrl: "./lights-grid.component.html",
	styleUrls: ["./lights-grid.component.scss"]
})
export class LightsGridComponent {
	public isSolved: boolean;
	@Input() public size: number = 6;

	@ViewChildren(LightsRowComponent)
	public rows: QueryList<LightsRowComponent>;

	public get sizeArray() {
		return new Array(this.size);
	}

	public onToggle(col: number, row: number) {
		let before = this.rows.find((item, index) => index === row - 1);
		let after = this.rows.find((item, index) => index === row + 1);

		if (before) {
			before.toggle(col);
		}

		if (after) {
			after.toggle(col);
		}

		this.isSolved = this.checkSolution();
	}

	private checkSolution() {
		let solved = true;
		this.rows.forEach(row => {
			row.lights.forEach(light => {
				if (light.isActive) {
					solved = false;
				}
			});
		});

		return solved;
	}
}
