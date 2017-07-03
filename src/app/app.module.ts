import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { RouterModule }  from '@angular/router';

import { AppComponent } from './app.component';
import { HikeListComponent } from './hike/hike-list.component';
import { HikeDetailsComponent } from './hike/hike-details.component';
import { HikeModule } from './hike/hike.module';
import { ContactModule } from './contact/contact.module';
import { ContactUsComponent } from './contact/contact-us.component';
import { HomeComponent } from './home/home.component';
import { HomeModule } from './home/home.module';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports:      [ BrowserModule,
                  ContactModule,
                  HikeModule,
                  HttpModule,
                  HomeModule,
                  RouterModule.forRoot([
                    { path: 'home', component: HomeComponent },
                    { path: 'hikes', component: HikeListComponent},
                    { path: 'hikes/:id', component: HikeDetailsComponent},
                    { path: 'contact', component: ContactUsComponent},
                    { path: '', redirectTo: 'home', pathMatch: 'full'},
                    { path: '**', component: PageNotFoundComponent }
                  ])
  ],
  declarations: [ AppComponent, PageNotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
