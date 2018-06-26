import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { TimePage } from './pages/time/time.page';
import { TasksPage } from './pages/tasks/tasks.page';
import { ProjectsPage } from './pages/projects/projects.page';
import { MenuComponent } from './core/components/menu/menu.component';
import { SettingsPage } from './pages/settings/settings.page';
import { APP_BASE_HREF } from '@angular/common';
import { Router } from '@angular/router';

describe('AppComponent', () => {

  let location: Location;
  let router: Router;
  let fixture;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
      ]
    }).compileComponents();

    router = TestBed.get(Router);
    location = TestBed.get(Location);

    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('navigate to "" redirects to /taskwipe/tasks', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.pathname).toBe('/taskwipe/tasks');
  }));
});
