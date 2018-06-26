import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TimePage } from './pages/time/time.page';
import { TasksPage } from './pages/tasks/tasks.page';
import { ProjectsPage } from './pages/projects/projects.page';
import { HeaderComponent } from './core/header/header.component';
import { SettingsPage } from './pages/settings/settings.page';
import { MenuComponent } from './core/components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TimePage,
    TasksPage,
    ProjectsPage,
    SettingsPage,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/taskwipe' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
