import { Component, ViewChild } from "@angular/core";
import { LightsGridComponent } from "event-emitter-timeline/components";

@Component({
	selector: "lights-out-page",
	templateUrl: "./lights-out.page.html",
	styleUrls: ["./lights-out.page.scss"],
})
export class LightsOutPage {
	@ViewChild(LightsGridComponent, { static: true })
	public grid: LightsGridComponent;

	public get gridSolved() {
		return this.grid.isSolved;
	}

	public onReset() {
		this.grid.reset();
	}
}
