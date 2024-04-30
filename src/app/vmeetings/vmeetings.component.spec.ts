import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VmeetingsComponent } from './vmeetings.component';

describe('VmeetingsComponent', () => {
  let component: VmeetingsComponent;
  let fixture: ComponentFixture<VmeetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VmeetingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VmeetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
