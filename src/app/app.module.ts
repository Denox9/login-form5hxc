import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { LoginFormComponent } from "./login-form/login-form.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, LoginFormComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
