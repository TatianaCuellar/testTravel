import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalDetailBookComponent } from './modal-detail-book.component';

describe('ModalDetailBookComponent', () => {
  let component: ModalDetailBookComponent;
  let fixture: ComponentFixture<ModalDetailBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalDetailBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalDetailBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
