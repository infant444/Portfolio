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
import { AddWorkComponent } from './Component/admin/add-work/add-work.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, provideHttpClient } from '@angular/common/http';
import { SkillTypesComponent } from './Component/admin/skill-types/skill-types.component';
import { GetintouchComponent } from './Component/getintouch/getintouch.component';
import { ThreeDmodelComponent } from './Component/three-dmodel/three-dmodel.component';
import { FooterComponent } from './Component/footer/footer.component';
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
    AddWorkComponent,
    SkillTypesComponent,
    GetintouchComponent,
    ThreeDmodelComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
