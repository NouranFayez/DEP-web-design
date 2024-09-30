import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryGuardComponent } from './gallery-guard.component';

describe('GalleryGuardComponent', () => {
  let component: GalleryGuardComponent;
  let fixture: ComponentFixture<GalleryGuardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GalleryGuardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryGuardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
