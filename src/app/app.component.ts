import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './_auth/auth.service';
import {PermissionService} from './_components_core/permission.service';
import {Permission} from './permission';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    // navBar: SafeHtml;
    isShowNavBar: boolean | false;

    constructor(
        private router: Router,
        private permissionService: PermissionService,
        private authService: AuthService,
        private domSanitizer: DomSanitizer
    ) {
        this.authService.currentTokenObservable.subscribe(jsonToken => {
            this.isShowNavBar = this.authService.isLoggedIn();
            if (this.isShowNavBar) {
                // this.permissionService.getNavigationBar([]).subscribe(pers => {
                //     // const navigationHtml = this.permissionService.getNavbar(pers);
                //     // this.navBar = this.domSanitizer.bypassSecurityTrustHtml(navigationHtml);
                // });
            }
        });
    }

    ngOnInit(): void {

    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
