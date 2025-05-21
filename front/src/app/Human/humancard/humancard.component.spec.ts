import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumancardComponent } from './humancard.component';

describe('HumancardComponent', () => {
  let component: HumancardComponent;
  let fixture: ComponentFixture<HumancardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HumancardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HumancardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
