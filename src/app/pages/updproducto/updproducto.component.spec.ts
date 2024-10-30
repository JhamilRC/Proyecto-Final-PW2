import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdproductoComponent } from './updproducto.component';

describe('UpdproductoComponent', () => {
  let component: UpdproductoComponent;
  let fixture: ComponentFixture<UpdproductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdproductoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdproductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
