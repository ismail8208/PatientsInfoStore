import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFromComponent } from './test-from.component';

describe('TestFromComponent', () => {
  let component: TestFromComponent;
  let fixture: ComponentFixture<TestFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFromComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
