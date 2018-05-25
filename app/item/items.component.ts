import { Component, OnInit, ViewChild } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { RadDataFormComponent } from "nativescript-ui-dataform/angular";


import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})
export class ItemsComponent implements OnInit {
    _loginForm: LoginForm;
    items: Item[];
    @ViewChild("loginFormElement") loginFormElement: RadDataFormComponent;

    get loginForm(): LoginForm {
        return this._loginForm;
    }
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    constructor(private itemService: ItemService, private _rEx: RouterExtensions) {
        this._loginForm = new LoginForm();
    }

    onBtnTap(): void {
        this._rEx.navigate(["/item"],
            {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                }
            });
    }

    onLoginBtnTap(): void {
        if (this.loginFormElement.dataForm.hasValidationErrors()) {
            console.log("hasValidationErrors!")  
        } else {
            console.log("success!!!")
        }
    }

    ngOnInit(): void {

    }
}

export class LoginForm {
    email: string;
    password: string;

    constructor() {
        this.email = "";
        this.password = "";
    }
}
