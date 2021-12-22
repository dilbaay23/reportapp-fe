import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailErrorDefinitionComponent } from './detail-error-definition.component';

describe('DetailErrorDefinitionComponent', () => {
  let component: DetailErrorDefinitionComponent;
  let fixture: ComponentFixture<DetailErrorDefinitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailErrorDefinitionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailErrorDefinitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
