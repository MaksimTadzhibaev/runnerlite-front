import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './helpers/auth.guard';
import { Role } from './model/role';
import { CabinetAdminComponent, CABINET_ADMIN_URL } from './pages/cabinet-admin/cabinet-admin.component';
import { CabinetRunnerComponent, CABINET_RUNNER_URL } from './pages/cabinet-runner/cabinet-runner.component';
import { IndexComponent } from './pages/index/index.component';
import { LoginComponent, LOGIN_URL } from './pages/login/login.component';
import { SignupComponent, SIGNUP_URL } from './pages/signup/signup.component';

const routes: Routes = [
  { 
    path: "", 
    pathMatch: "full", 
    component: IndexComponent,
    data: {
      title: 'index',
      breadcrumb: [
        {
          label: 'Главная',
          url: '/'
        }
      ]
    }
  },
  {
    path: LOGIN_URL, 
    component: LoginComponent,
    data: {
      title: 'Вход',
      breadcrumb: [
        {
          label: 'Вход',
          url: LOGIN_URL
        }
      ]
    }
  },
  {
    path: SIGNUP_URL,
    component: SignupComponent,
    data: {
      title: 'Регистрация',
      breadcrumb: [
        {
          label: 'Регистрация',
          url: SIGNUP_URL
        }
      ]
    }
  },
  {
    path: CABINET_RUNNER_URL,
    component: CabinetRunnerComponent,
    canActivate: [AuthGuard],
    data: {
      roles: [Role.Runner],
      title: 'Личный кабинет бегуна',
      breadcrumb: [
        {
          label: 'Личный кабинет бегуна',
          url: CABINET_RUNNER_URL
        }
      ]
    }
  },
  {
    path: CABINET_ADMIN_URL,
    component: CabinetAdminComponent,
    canActivate: [AuthGuard],
    data: {
      roles: [Role.Admin],
      title: 'Личный кабинет администратора',
      breadcrumb: [
        {
          label: 'Личный кабинет администратора',
          url: CABINET_ADMIN_URL
        }
      ]
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
