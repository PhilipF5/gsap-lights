import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { COMPONENTS } from "./components";
import { PAGES } from "./pages";

@NgModule({
	declarations: [AppComponent, COMPONENTS, PAGES],
	imports: [BrowserModule, AppRoutingModule],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
