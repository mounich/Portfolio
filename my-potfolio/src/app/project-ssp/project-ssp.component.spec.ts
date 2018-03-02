import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSspComponent } from './project-ssp.component';

describe('ProjectSspComponent', () => {
  let component: ProjectSspComponent;
  let fixture: ComponentFixture<ProjectSspComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSspComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
