import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './components/products/products.component';
import { CategoryComponent } from './components/category/category.component';
import { NaviComponent } from './components/navi/navi.component';
import { EdvProductPipe } from './pipes/edv-product.pipe';
import { FilterPipe } from './pipes/filter.pipe';

import { ToastrModule } from 'ngx-toastr';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { InterceptorService } from './spinner/interceptor.service';

@NgModule({
  //Components are declared here.

  //Pipes are declared here
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoryComponent,
    NaviComponent,
    EdvProductPipe,
    FilterPipe,
    CartSummaryComponent,
    SpinnerComponent,
  ],
  //Built-in libraries here
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*ToastrModule.forRoot({
      timeOut: 10000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }), */
