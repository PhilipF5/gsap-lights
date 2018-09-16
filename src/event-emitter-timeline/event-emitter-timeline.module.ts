import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EventEmitterTimelineRoutingModule } from "./event-emitter-timeline-routing.module";

import { COMPONENTS } from "./components";
import { PAGES } from "./pages";

@NgModule({
	declarations: [COMPONENTS, PAGES],
	imports: [CommonModule, EventEmitterTimelineRoutingModule],
	exports: [COMPONENTS, PAGES],
	providers: []
})
export class EventEmitterTimelineModule {}
