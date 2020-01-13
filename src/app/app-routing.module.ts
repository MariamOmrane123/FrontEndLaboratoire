import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './component/main-page/main-page.component';
import {ContactPageComponent} from './component/contact-page/contact-page.component';
import {NotFoundComponent} from './component/not-found/not-found.component';
import {PublicationsComponent} from './component/publications/publications.component';
import {EventsComponent} from './component/events/events.component';
import {MembersComponent} from './component/members/members.component';
import {AboutComponent} from './component/about/about.component';
import {LoginComponent} from './component/login/login.component';
import {MemberPageComponent} from './component/member-page/member-page.component';
import {UserDetailsComponent} from './component/user-details/user-details.component';
import {MysettingsComponent} from './component/member-page/mysettings/mysettings.component';
import {MypublicationsComponent} from './component/member-page/mypublications/mypublications.component';
import {MyeventsComponent} from './component/member-page/myevents/myevents.component';
import {MyprofileComponent} from './component/member-page/myprofile/myprofile.component';


const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'publications/:id', component: PublicationsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'events/:id', component: EventsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'members', component: MembersComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: MemberPageComponent,children:[
      {path:'settings',component:MysettingsComponent},
      {path:'publications',component:MypublicationsComponent},
      {path:'events',component:MyeventsComponent},
      {path:'profile',component:MyprofileComponent},
    ]},
  { path: 'members/:id', component: UserDetailsComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
