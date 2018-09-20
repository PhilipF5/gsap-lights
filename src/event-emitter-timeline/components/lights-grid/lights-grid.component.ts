import { Component, Input, QueryList, ViewChildren } from "@angular/core";
import { TimelineLite } from "gsap";
import { LightsRowComponent } from "../lights-row/lights-row.component";

@Component({
	selector: "lights-grid",
	templateUrl: "./lights-grid.component.html",
	styleUrls: ["./lights-grid.component.scss"],
})
export class LightsGridComponent {
	public isSolved: boolean;
	@ViewChildren(LightsRowComponent)
	public rows: QueryList<LightsRowComponent>;
	@Input()
	public size: number = 6;

	public get sizeArray() {
		return new Array(this.size);
	}

	public onToggle(col: number, row: number, timeline: TimelineLite) {
		let before = this.rows.find((item, index) => index === row - 1);
		let after = this.rows.find((item, index) => index === row + 1);

		if (before) {
			timeline.add(before.toggle(col), "start+=0.25");
		}

		if (after) {
			timeline.add(after.toggle(col), "start+=0.25");
		}

		this.isSolved = this.checkSolution();
	}

	public reset() {
		this.isSolved = false;
		this.rows.forEach(row => {
			row.lights.forEach(light => {
				light.reset();
			});
		});
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
