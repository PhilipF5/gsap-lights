import { Component, ViewChild } from "@angular/core";
import { LightsGridComponent } from "app/components";

@Component({
	selector: "lights-out-page",
	templateUrl: "./lights-out.page.html",
	styleUrls: ["./lights-out.page.scss"],
})
export class LightsOutPage {
	@ViewChild(LightsGridComponent)
	public grid: LightsGridComponent;

	public get gridSolved() {
		return this.grid.isSolved;
	}

	public onReset() {
		this.grid.reset();
	}
}
