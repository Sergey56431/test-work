import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import {RouterModule, RouterOutlet} from "@angular/router";
import { DetailSliderComponent } from './components/detail-slider/detail-slider.component';
import { CountSelectorComponent } from './components/count-selector/count-selector.component';
import {FormsModule} from "@angular/forms";
import { HeaderSearchComponent } from './components/header-search/header-search.component';



@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    DetailSliderComponent,
    CountSelectorComponent,
    HeaderSearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
    exports: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent,
        DetailSliderComponent,
        CountSelectorComponent
    ]
})
export class SharedModule { }
