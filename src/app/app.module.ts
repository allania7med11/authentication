import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { IconComponent } from './icon/icon.component';
import { MailComponent } from './icons/mail.component';
import { LockClosedComponent } from './icons/lock-closed.component';
import { UserComponent } from './icons/user.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    IconComponent,
    MailComponent,
    LockClosedComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
