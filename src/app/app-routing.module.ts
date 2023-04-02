import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { RoleGuardService } from "./service/role-guard.service";

const routes: Routes = [
  {
    path: 'pages',
    loadChildren: () => import('./modules/pages/pages.module').then(m => m.PagesModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module').then(m => m.AdminModule),
    //canActivate:[RoleGuardService], data : {expectedRole : 'Admin'}
  },
  {
    path: 'host',
    loadChildren: () => import('./modules/host/host.module').then(m => m.HostModule),
    canActivate:[RoleGuardService], data : {expectedRole : 'OrdinaryUser'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
