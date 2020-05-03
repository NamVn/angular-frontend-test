import {Injectable} from '@angular/core';
import {AuthService} from '../_auth/auth.service';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Permission} from '../permission';
import {catchError} from 'rxjs/operators';
import {handleError} from '../_utils/my-core';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {


  constructor(private http: HttpClient) {
  }

  /**
   * Lấy danh sách các menu trong hệ thống
   * @param roleNames
   */
  getNavigationBar(roleNames: []) {
    // const params: URLSearchParams = new URLSearchParams();
    // params.append('roleName', 'ROLE_MANAGER');
    // params.append('userName', 'admin');

    return this.http.get<Permission[]>('http://localhost:8080/permission', {
        params: {
          roleName: 'ROLE_MANAGER',
          userName: 'admin'
        }
      }
    ).pipe(catchError(handleError));
  }

  public getNavbar(permissions: Permission[]) {
    if (permissions) {
      let resultRenderNav = '';
      permissions.forEach(per => {
        let btnDropDown = this.setTextButtonDropDown(per);
        const dropDownContent = this.recursiveNavigationBar(per, '', true);
        const endDiv = '</div>';
        if (dropDownContent && dropDownContent !== '') {
          btnDropDown = btnDropDown.concat(dropDownContent).concat(endDiv);
        } else {
          btnDropDown = btnDropDown.concat(endDiv);
        }
        resultRenderNav = resultRenderNav.concat(btnDropDown).concat('\n');
      });
      return resultRenderNav;
    }
  }

  /**
   * <div class="dropdown">
   <button class="dropbtn">Hệ thống
   <i class="fa fa-caret-down"></i>
   </button>
   <div class="dropdown-content">
   <a routerLink="/account" *ngIf="permission==='PERMISSION_ACCOUNT'">Tài khoản</a>
   <div class="n-dropdown-content">
   <a routerLink="/account" *ngIf="permission==='PERMISSION_ACCOUNT'">Edit</a>
   <a routerLink="/account" *ngIf="permission==='PERMISSION_ACCOUNT'">GET</a>
   </div>
   <a routerLink="/role" *ngIf="permission==='PERMISSION_ROLE'">Vai trò</a>
   <a routerLink="/permission" *ngIf="permission==='PERMISSION_PERMISSION'">Quyền</a>
   </div>
   </div>
   * @param per
   * @param prevText
   * @param isFirstNav
   */

  // @ts-ignore
  /**
   * Nạp dropdown-content của button
   * @param per
   * @param dropDownContent
   * @param isFirstNav
   */
  private recursiveNavigationBar(per: Permission, dropDownContent: string | '', isFirstNav: boolean) {
    const subNavs = per.childrenDto;
    if (subNavs) {
      if (!isFirstNav) {
        dropDownContent = dropDownContent
          .concat('<div class="n-dropdown-content">')
          .concat('\n');
      } else {
        dropDownContent = dropDownContent
          .concat('<div class="dropdown-content">')
          .concat('\n');
      }
      subNavs.forEach(subNav => {
        dropDownContent = dropDownContent.concat('<a routerLink=')
          .concat('"')
          .concat(`${subNav.href}`)
          .concat('"')
          .concat('>')
          .concat(`${subNav.label}`)
          .concat('</a>')
          .concat('\n');
        dropDownContent = this.recursiveNavigationBar(subNav, dropDownContent, false);
      });
      const endDivContent = '</div>'.concat('\n');
      dropDownContent = dropDownContent.concat(endDivContent);
    }
    return dropDownContent;
  }

  /**
   * Gán chữ vào trong button navbar
   * @param per
   */
  private setTextButtonDropDown(per: Permission): string {
    const buttonDropDown = '<div class="dropdown">'
      .concat('\n')
      .concat('      <button class="dropbtn">')
      .concat(`${per.label}`)
      .concat('<i class="fa fa-caret-down"></i>')
      .concat('\n')
      .concat('      </button>')
      .concat('\n');
    return buttonDropDown;
  }
}
