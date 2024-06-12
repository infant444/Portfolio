import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HomepadeComponent } from './Component/homepade/homepade.component';
import { HeaderComponent } from './Component/header/header.component';
import { BannerComponent } from './Component/banner/banner.component';
import { WelcomeComponent } from './Component/welcome/welcome.component';
import {MatIconModule} from '@angular/material/icon';
import { AboutusComponent } from './Component/aboutus/aboutus.component';
import { WorkComponent } from './Component/work/work.component';
import { TitleComponent } from './Component/title/title.component';
import { ImgshowComponent } from './Component/imgshow/imgshow.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepadeComponent,
    HeaderComponent,
    BannerComponent,
    WelcomeComponent,
    AboutusComponent,
    WorkComponent,
    TitleComponent,
    ImgshowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
