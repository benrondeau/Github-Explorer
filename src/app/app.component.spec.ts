import { TestBed, ComponentFixture, async } from '@angular/core/testing';

import { AppComponent } from './app.component';
import { MenubarComponent } from './menubar/menubar.component';
import { GetUserComponent } from './get-user/get-user.component';

describe('AppComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MenubarComponent,
        GetUserComponent
      ],
    }).compileComponents();
  }));

  it('should create <App/>', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  }));

  it('should render an h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.getElementsByTagName('h1').length).toEqual(1);
  }));

});
