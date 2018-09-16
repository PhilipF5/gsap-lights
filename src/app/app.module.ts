import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { EventEmitterModule } from "../event-emitter/event-emitter.module";
import { EventEmitterTimelineModule } from "../event-emitter-timeline/event-emitter-timeline.module";
import { ParentSubjectModule } from "../parent-subject/parent-subject.module";
import { ServiceSubjectModule } from "../service-subject/service-subject.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, EventEmitterModule, EventEmitterTimelineModule, ParentSubjectModule, ServiceSubjectModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
