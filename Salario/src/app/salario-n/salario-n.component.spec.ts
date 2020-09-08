import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarioNComponent } from './salario-n.component';

describe('SalarioNComponent', () => {
  let component: SalarioNComponent;
  let fixture: ComponentFixture<SalarioNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalarioNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarioNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
