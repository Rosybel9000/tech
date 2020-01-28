import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { OpleidingenComponent } from './opleidingen/opleidingen.component';
import { StartHubComponent } from './start-hub/start-hub.component';


@NgModule({
  declarations: [
    AppComponent,
    OpleidingenComponent,
    StartHubComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
