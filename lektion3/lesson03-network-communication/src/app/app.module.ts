import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { LoggingInterceptor } from './logging.interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule, 
    AppRoutingModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
