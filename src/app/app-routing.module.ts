import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LightsOutPage } from "./pages/lights-out/lights-out.page";

const routes: Routes = [{ path: "**", component: LightsOutPage }];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
