import { TestBed } from '@angular/core/testing';

import { ServicioAutorizacionService } from './servicio-autorizacion.service';

describe('ServicioAutorizacionService', () => {
  let service: ServicioAutorizacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioAutorizacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
