import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegoListaComponent } from './juego-lista.component';

describe('JuegoListaComponent', () => {
  let component: JuegoListaComponent;
  let fixture: ComponentFixture<JuegoListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegoListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegoListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
