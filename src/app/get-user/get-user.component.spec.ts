import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetUserComponent } from './get-user.component';

describe('GetUserComponent', () => {
  let component: GetUserComponent;
  let fixture: ComponentFixture<GetUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('<app-get-user/> should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should render two <input> elements', () => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.getElementsByTagName('input').length).toEqual(2);
  });

  it('should return results for Octocat', () => {
    // add string to input field
    // hit submit
    // receive response from Github
    expect(true).toEqual(true); // TODO update when test is written
  });

  it('should render JSON results to DOM', () => {
    expect(true).toEqual(true); // TODO update when test is written
  });



});
