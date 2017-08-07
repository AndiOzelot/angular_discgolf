import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, MdCardModule, MdMenuModule, MdToolbarModule, MdIconModule } from '@angular/material';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelpComponent } from './help/help.component';
import { ScorecardComponent } from './scorecard/scorecard.component';
import { routing } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HelpComponent,
    ScorecardComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      BrowserAnimationsModule,
      MdButtonModule,
      MdMenuModule,
      MdCardModule,
      MdToolbarModule,
      MdIconModule,
      routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
