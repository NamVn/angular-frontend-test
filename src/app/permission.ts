export class Permission {
  id: number;
  uuid: string;
  code: string;
  label: string;
  iconClass: string;
  href: string;
  parentId: number;
  childrenDto: Permission[];
}
