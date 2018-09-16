import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ParentSubjectRoutingModule } from "./parent-subject-routing.module";

import { COMPONENTS } from "./components";
import { PAGES } from "./pages";

@NgModule({
	declarations: [COMPONENTS, PAGES],
	imports: [CommonModule, ParentSubjectRoutingModule],
	exports: [COMPONENTS, PAGES],
	providers: []
})
export class ParentSubjectModule {}
