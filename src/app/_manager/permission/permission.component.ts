import {Component, OnInit} from '@angular/core';
import {Permission} from '../../permission';
import {NestedTreeControl} from '@angular/cdk/tree';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import {PermissionService} from '../../_components_core/permission.service';

@Component({
  selector: 'app-permission',
  templateUrl: './permission.component.html',
  styleUrls: ['./permission.component.css']
})
export class PermissionComponent implements OnInit {
  treeControl = new NestedTreeControl<Permission>(node => node.childrenDto);
  dataSource = new MatTreeNestedDataSource<Permission>();

  constructor(private permissionService: PermissionService) {
    this.permissionService.getPermissionTree([]).subscribe(
      permissionList => {
        this.dataSource.data = permissionList;
      }
    );
  }

  hasChild = (_: number, permission: Permission) => !!permission.childrenDto && permission.childrenDto.length > 0;


  ngOnInit(): void {
  }

}
