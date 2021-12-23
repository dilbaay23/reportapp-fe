import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorDefinitionSelectComponent } from './error-definition-select.component';

describe('ErrorDefinitionSelectComponent', () => {
  let component: ErrorDefinitionSelectComponent;
  let fixture: ComponentFixture<ErrorDefinitionSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorDefinitionSelectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorDefinitionSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
