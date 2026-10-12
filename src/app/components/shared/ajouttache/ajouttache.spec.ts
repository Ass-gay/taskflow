import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ajouttache } from './ajouttache';

describe('Ajouttache', () => {
  let component: Ajouttache;
  let fixture: ComponentFixture<Ajouttache>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ajouttache],
    }).compileComponents();

    fixture = TestBed.createComponent(Ajouttache);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
