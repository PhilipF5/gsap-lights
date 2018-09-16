import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ServiceSubjectRoutingModule } from "./service-subject-routing.module";

import { COMPONENTS } from "./components";
import { PAGES } from "./pages";

@NgModule({
	declarations: [COMPONENTS, PAGES],
	imports: [CommonModule, ServiceSubjectRoutingModule],
	exports: [COMPONENTS, PAGES],
	providers: []
})
export class ServiceSubjectModule {}
