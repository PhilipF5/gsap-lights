import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { EventEmitterRoutingModule } from "./event-emitter-routing.module";

import { COMPONENTS } from "./components";
import { PAGES } from "./pages";

@NgModule({
	declarations: [COMPONENTS, PAGES],
	imports: [CommonModule, EventEmitterRoutingModule],
	exports: [COMPONENTS, PAGES],
	providers: []
})
export class EventEmitterModule {}
