import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisinvestigateComponent } from './misinvestigate.component';

describe('MisinvestigateComponent', () => {
  let component: MisinvestigateComponent;
  let fixture: ComponentFixture<MisinvestigateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisinvestigateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MisinvestigateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
