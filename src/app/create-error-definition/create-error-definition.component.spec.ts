import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateErrorDefinitionComponent } from './create-error-definition.component';

describe('CreateErrorDefinitionComponent', () => {
  let component: CreateErrorDefinitionComponent;
  let fixture: ComponentFixture<CreateErrorDefinitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateErrorDefinitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateErrorDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
