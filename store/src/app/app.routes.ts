import { Routes } from '@angular/router';
import { LayoutComponent } from '@shared/components/layout/layout.component';
import { NotFoundComponent } from '@products/pages/not-found/not-found.component';

export const routes: Routes = [

  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: '' , loadComponent: () => import("./domains/products/pages/list/list.component")
      },
      {
        path: 'About' , loadComponent: () => import("./domains/products/pages/about/about.component")
      },
      {
        path: 'Product/:id', loadComponent: () => import("./domains/products/pages/product-datail/product-datail.component")
      }


    ]
  },
  {
    path: "**" , component: NotFoundComponent
  }


];
