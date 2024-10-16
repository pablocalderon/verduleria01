import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrutosSecosComponent } from './frutos-secos.component';

describe('FrutosSecosComponent', () => {
  let component: FrutosSecosComponent;
  let fixture: ComponentFixture<FrutosSecosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrutosSecosComponent]
    });
    fixture = TestBed.createComponent(FrutosSecosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
