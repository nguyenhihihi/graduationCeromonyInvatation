import {NgModule} from '@angular/core';
import {Routes, RouterModule, CanActivate} from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http';

import {AuthGuardService as AuthGuard} from './auth-guard.service';

import { NotFoundComponent } from './not-found/not-found.component';
import { InvitationComponent } from './invitation/invitation.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routesConfig : Routes = [
    {path: 'dashboard',  component: DashboardComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent },
    {path: '', redirectTo: '/login', pathMatch: 'full'},
    {path: 'invi/:id', component: InvitationComponent},
    {path: '**', component: NotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routesConfig), CommonModule, FormsModule, HttpModule],
    declarations: [
        DashboardComponent,
        NotFoundComponent,
        LoginComponent,
        InvitationComponent

    ],
    exports: [RouterModule],
    providers: [AuthGuard]
})

export class AppRoutingModule{
}