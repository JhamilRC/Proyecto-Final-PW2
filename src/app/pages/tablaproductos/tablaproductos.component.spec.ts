import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaproductosComponent } from './tablaproductos.component';

describe('TablaproductosComponent', () => {
  let component: TablaproductosComponent;
  let fixture: ComponentFixture<TablaproductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TablaproductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
