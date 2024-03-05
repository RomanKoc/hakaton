import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionCerradaComponent } from './session-cerrada.component';

describe('SessionCerradaComponent', () => {
  let component: SessionCerradaComponent;
  let fixture: ComponentFixture<SessionCerradaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SessionCerradaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SessionCerradaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
