import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaoEnontradoComponent } from './nao-enontrado.component';

describe('NaoEnontradoComponent', () => {
  let component: NaoEnontradoComponent;
  let fixture: ComponentFixture<NaoEnontradoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaoEnontradoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NaoEnontradoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
