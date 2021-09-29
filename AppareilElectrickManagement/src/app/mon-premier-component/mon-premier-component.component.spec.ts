import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonPremierComponentComponent } from './mon-premier-component.component';

describe('MonPremierComponentComponent', () => {
  let component: MonPremierComponentComponent;
  let fixture: ComponentFixture<MonPremierComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonPremierComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonPremierComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
