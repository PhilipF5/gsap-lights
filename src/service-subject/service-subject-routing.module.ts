import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LightsOutPage } from "./pages";

const routes: Routes = [{ path: "service-subject", component: LightsOutPage }];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class ServiceSubjectRoutingModule {}
