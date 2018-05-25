"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var angular_1 = require("nativescript-ui-dataform/angular");
var item_service_1 = require("./item.service");
var ItemsComponent = /** @class */ (function () {
    // This pattern makes use of Angular’s dependency injection implementation to inject an instance of the ItemService service into this class. 
    // Angular knows about this service because it is included in your app’s main NgModule, defined in app.module.ts.
    function ItemsComponent(itemService, _rEx) {
        this.itemService = itemService;
        this._rEx = _rEx;
        this._loginForm = new LoginForm();
    }
    Object.defineProperty(ItemsComponent.prototype, "loginForm", {
        get: function () {
            return this._loginForm;
        },
        enumerable: true,
        configurable: true
    });
    ItemsComponent.prototype.onBtnTap = function () {
        this._rEx.navigate(["/item"], {
            animated: true,
            transition: {
                name: "slide",
                duration: 200,
                curve: "ease"
            }
        });
    };
    ItemsComponent.prototype.onLoginBtnTap = function () {
        if (this.loginFormElement.dataForm.hasValidationErrors()) {
            console.log("hasValidationErrors!");
        }
        else {
            console.log("success!!!");
        }
    };
    ItemsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        core_1.ViewChild("loginFormElement"),
        __metadata("design:type", angular_1.RadDataFormComponent)
    ], ItemsComponent.prototype, "loginFormElement", void 0);
    ItemsComponent = __decorate([
        core_1.Component({
            selector: "ns-items",
            moduleId: module.id,
            templateUrl: "./items.component.html",
        }),
        __metadata("design:paramtypes", [item_service_1.ItemService, router_1.RouterExtensions])
    ], ItemsComponent);
    return ItemsComponent;
}());
exports.ItemsComponent = ItemsComponent;
var LoginForm = /** @class */ (function () {
    function LoginForm() {
        this.email = "";
        this.password = "";
    }
    return LoginForm;
}());
exports.LoginForm = LoginForm;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXRlbXMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXRlbXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTZEO0FBQzdELHNEQUErRDtBQUMvRCw0REFBd0U7QUFJeEUsK0NBQTZDO0FBTzdDO0lBUUksNklBQTZJO0lBQzdJLGlIQUFpSDtJQUNqSCx3QkFBb0IsV0FBd0IsRUFBVSxJQUFzQjtRQUF4RCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFNBQUksR0FBSixJQUFJLENBQWtCO1FBQ3hFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztJQUN0QyxDQUFDO0lBUEQsc0JBQUkscUNBQVM7YUFBYjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7OztPQUFBO0lBT0QsaUNBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQ3hCO1lBQ0ksUUFBUSxFQUFFLElBQUk7WUFDZCxVQUFVLEVBQUU7Z0JBQ1IsSUFBSSxFQUFFLE9BQU87Z0JBQ2IsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsS0FBSyxFQUFFLE1BQU07YUFDaEI7U0FDSixDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFBO1FBQ3ZDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDN0IsQ0FBQztJQUNMLENBQUM7SUFFRCxpQ0FBUSxHQUFSO0lBRUEsQ0FBQztJQWpDOEI7UUFBOUIsZ0JBQVMsQ0FBQyxrQkFBa0IsQ0FBQztrQ0FBbUIsOEJBQW9COzREQUFDO0lBSDdELGNBQWM7UUFMMUIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3hDLENBQUM7eUNBV21DLDBCQUFXLEVBQWdCLHlCQUFnQjtPQVZuRSxjQUFjLENBcUMxQjtJQUFELHFCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7QUFyQ1ksd0NBQWM7QUF1QzNCO0lBSUk7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQVJZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUmFkRGF0YUZvcm1Db21wb25lbnQgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWRhdGFmb3JtL2FuZ3VsYXJcIjtcblxuXG5pbXBvcnQgeyBJdGVtIH0gZnJvbSBcIi4vaXRlbVwiO1xuaW1wb3J0IHsgSXRlbVNlcnZpY2UgfSBmcm9tIFwiLi9pdGVtLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwibnMtaXRlbXNcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIixcbn0pXG5leHBvcnQgY2xhc3MgSXRlbXNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIF9sb2dpbkZvcm06IExvZ2luRm9ybTtcbiAgICBpdGVtczogSXRlbVtdO1xuICAgIEBWaWV3Q2hpbGQoXCJsb2dpbkZvcm1FbGVtZW50XCIpIGxvZ2luRm9ybUVsZW1lbnQ6IFJhZERhdGFGb3JtQ29tcG9uZW50O1xuXG4gICAgZ2V0IGxvZ2luRm9ybSgpOiBMb2dpbkZvcm0ge1xuICAgICAgICByZXR1cm4gdGhpcy5fbG9naW5Gb3JtO1xuICAgIH1cbiAgICAvLyBUaGlzIHBhdHRlcm4gbWFrZXMgdXNlIG9mIEFuZ3VsYXLigJlzIGRlcGVuZGVuY3kgaW5qZWN0aW9uIGltcGxlbWVudGF0aW9uIHRvIGluamVjdCBhbiBpbnN0YW5jZSBvZiB0aGUgSXRlbVNlcnZpY2Ugc2VydmljZSBpbnRvIHRoaXMgY2xhc3MuIFxuICAgIC8vIEFuZ3VsYXIga25vd3MgYWJvdXQgdGhpcyBzZXJ2aWNlIGJlY2F1c2UgaXQgaXMgaW5jbHVkZWQgaW4geW91ciBhcHDigJlzIG1haW4gTmdNb2R1bGUsIGRlZmluZWQgaW4gYXBwLm1vZHVsZS50cy5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGl0ZW1TZXJ2aWNlOiBJdGVtU2VydmljZSwgcHJpdmF0ZSBfckV4OiBSb3V0ZXJFeHRlbnNpb25zKSB7XG4gICAgICAgIHRoaXMuX2xvZ2luRm9ybSA9IG5ldyBMb2dpbkZvcm0oKTtcbiAgICB9XG5cbiAgICBvbkJ0blRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fckV4Lm5hdmlnYXRlKFtcIi9pdGVtXCJdLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBvbkxvZ2luQnRuVGFwKCk6IHZvaWQge1xuICAgICAgICBpZiAodGhpcy5sb2dpbkZvcm1FbGVtZW50LmRhdGFGb3JtLmhhc1ZhbGlkYXRpb25FcnJvcnMoKSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJoYXNWYWxpZGF0aW9uRXJyb3JzIVwiKSAgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInN1Y2Nlc3MhISFcIilcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgTG9naW5Gb3JtIHtcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lbWFpbCA9IFwiXCI7XG4gICAgICAgIHRoaXMucGFzc3dvcmQgPSBcIlwiO1xuICAgIH1cbn1cbiJdfQ==