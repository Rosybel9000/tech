import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NieuwsComponent } from './page2/nieuws/nieuws.component';
import { OnsTeamComponent } from './page8/ons-team/ons-team.component';

@NgModule({
  declarations: [
    AppComponent,

    NieuwsComponent,

    OnsTeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
