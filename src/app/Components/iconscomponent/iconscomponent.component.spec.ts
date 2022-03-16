import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconscomponentComponent } from './iconscomponent.component';

describe('IconscomponentComponent', () => {
  let component: IconscomponentComponent;
  let fixture: ComponentFixture<IconscomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconscomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
