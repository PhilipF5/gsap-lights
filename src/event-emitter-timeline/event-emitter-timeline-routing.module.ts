import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LightsOutPage } from "./pages";

const routes: Routes = [{ path: "event-emitter-timeline", component: LightsOutPage }];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class EventEmitterTimelineRoutingModule {}
