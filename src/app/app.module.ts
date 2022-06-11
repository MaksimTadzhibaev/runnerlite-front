import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { SliderComponent } from './components/slider/slider.component';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatBreadcrumbModule } from "mat-breadcrumb";
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DateAdapter, MatNativeDateModule, MAT_DATE_FORMATS } from '@angular/material/core';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_MOMENT_DATE_FORMATS, MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { MatExpansionModule } from '@angular/material/expansion';
import { AngularYandexMapsModule } from 'angular8-yandex-maps';
import { MatTableModule } from '@angular/material/table';
import { IndexComponent } from './pages/index/index.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { MatMenuModule } from '@angular/material/menu';

import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
//import { CustomDateAdapter } from './helpers/custom.data.adapter';
import { CabinetRunnerComponent } from './pages/cabinet-runner/cabinet-runner.component';

import { RunnersLastResultComponent } from './components/runners-last-result/runners-last-result.component';
import { VolunteerLastHistoryComponent } from './components/volunteer-last-history/volunteer-last-history.component';
import { AchievementsHistoryComponent } from './components/achievements-history/achievements-history.component';
import { SubscriptionsListComponent } from './components/subscriptions-list/subscriptions-list.component';
import { PlanRunComponent } from './components/plan-run/plan-run.component';
import { PlanVolunteerComponent } from './components/plan-volunteer/plan-volunteer.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { ErrorInterceptor } from './helpers/error.interceptor';
import { CabinetAdminComponent } from './pages/cabinet-admin/cabinet-admin.component';
import { TeamInfoComponent } from './components/team-info/team-info.component';
import { TeamsVolunteerPlanningComponent } from './components/teams-volunteer-planning/teams-volunteer-planning.component';
import { AdminVolunteerInfoComponent } from './components/admin-volunteer-info/admin-volunteer-info.component';


const maskConfig: Partial<IConfig> = {
  validation: false,
};
@NgModule({
  declarations: [
    AppComponent,
    SliderComponent, MainMenuComponent, IndexComponent, LoginComponent, SignupComponent, CabinetRunnerComponent, RunnersLastResultComponent, VolunteerLastHistoryComponent, AchievementsHistoryComponent, SubscriptionsListComponent, PlanRunComponent, PlanVolunteerComponent, UserInfoComponent, CabinetAdminComponent, TeamInfoComponent, TeamsVolunteerPlanningComponent, AdminVolunteerInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    IvyCarouselModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatBreadcrumbModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatRadioModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatTableModule,
    MatMenuModule,    
    NgxMaskModule.forRoot(maskConfig),
    AngularYandexMapsModule,
    HttpClientModule
  ],
  providers: [
 //   { provide: DateAdapter, useClass: CustomDateAdapter },
    { provide: MAT_DATE_LOCALE, useValue: 'ru-RU' },
    { provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true } },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})



export class AppModule { }
