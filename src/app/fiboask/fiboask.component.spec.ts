import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiboaskComponent } from './fiboask.component';

describe('FiboaskComponent', () => {
  let component: FiboaskComponent;
  let fixture: ComponentFixture<FiboaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiboaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiboaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
