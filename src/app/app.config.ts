import { ApplicationConfig } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { ProductService } from './services/product.service';
import { ProductRemoteService } from './services/product-remote.service';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(),
    { provide: ProductService, useClass: ProductRemoteService}
  ]
};
