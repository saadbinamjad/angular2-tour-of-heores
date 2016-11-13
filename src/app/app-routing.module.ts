import { NgModule }     from '@angular/core';
import { RouterModule, CanActivate  } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component'; 
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
    {
      path: 'heroes',
      component: HeroesComponent,
      canActivate: [AuthGuard]
    },
    {
      path: 'dashboard',
      component: DashboardComponent,
      canActivate: [AuthGuard]
    },
    { 
      path: 'login', 
      component: LoginComponent
    },
    {
	    path: '',
    	redirectTo: '/dashboard',
    	pathMatch: 'full'
    },
    {
  		path: 'detail/:id',
  		component: HeroDetailComponent,
      canActivate: [AuthGuard]
	},
    ])
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuard]
})
export class AppRoutingModule {}