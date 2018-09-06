import { Component, OnInit } from "@angular/core";

@Component({
	selector: "light",
	templateUrl: "./light.component.html",
	styleUrls: ["./light.component.scss"]
})
export class LightComponent implements OnInit {
	public get isActive(): boolean {
		return this._active;
	}

	private _active: boolean;

	ngOnInit() {
		this._active = Math.random() > 0.5;
	}
}
