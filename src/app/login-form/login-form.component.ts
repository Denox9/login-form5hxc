import { Component } from "@angular/core";

import { User } from "../user";

@Component({
  selector: "app-hero-form",
  templateUrl: "./login-form.component.html",
  styleUrls: ["./login-form.component.css"]
})
export class LoginFormComponent {
  powers = ["Male", "Female"];

  model = new User(name, name, name, this.powers[0], name, name, "", "", name);

  submitted = false;

  onSubmit() {
    this.submitted = true;
  }

  // TODO: Remove this when we're done
  get diagnostic() {
    return JSON.stringify(this.model);
  }

  newHero() {
    this.model = new User(" ", " ", " ", " ", " ", 0, " ", " ", 0);
  }

  skyDog(): User {
    let myHero = new User("", "", "", "", "", 0, "", "", 0);
    console.log("My hero is called " + myHero.name); // "My hero is called SkyDog"
    return myHero;
  }

  //////// NOT SHOWN IN DOCS ////////

  // Reveal in html:
  //   Name via form.controls = {{showFormControls(heroForm)}}
  showFormControls(form: any) {
    return form && form.controls["name"] && form.controls["name"].value; // Dr. IQ
  }

  /////////////////////////////
}

/*
Copyright 2017-2018 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
