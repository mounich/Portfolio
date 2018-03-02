import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTriptageComponent } from './project-triptage.component';

describe('ProjectTriptageComponent', () => {
  let component: ProjectTriptageComponent;
  let fixture: ComponentFixture<ProjectTriptageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTriptageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTriptageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
