import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mestaches } from './mestaches';

describe('Mestaches', () => {
  let component: Mestaches;
  let fixture: ComponentFixture<Mestaches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mestaches],
    }).compileComponents();

    fixture = TestBed.createComponent(Mestaches);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
