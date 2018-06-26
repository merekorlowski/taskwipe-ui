import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksPage } from './pages/tasks/tasks.page';
import { ProjectsPage } from './pages/projects/projects.page';
import { TimePage } from './pages/time/time.page';
import { SettingsPage } from './pages/settings/settings.page';

const routes: Routes = [
  { path: '', redirectTo: '/tasks', pathMatch: 'full' },
  { path: 'tasks', component: TasksPage },
  { path: 'projects', component: ProjectsPage },
  { path: 'time', component: TimePage },
  { path: 'settings', component: SettingsPage }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
