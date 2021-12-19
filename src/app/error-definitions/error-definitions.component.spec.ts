import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDefinitionsComponent } from './error-definitions.component';

describe('ErrorDefinitionsComponent', () => {
  let component: ErrorDefinitionsComponent;
  let fixture: ComponentFixture<ErrorDefinitionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorDefinitionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorDefinitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
