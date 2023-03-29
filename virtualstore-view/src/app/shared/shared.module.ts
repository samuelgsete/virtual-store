import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatBadgeModule } from '@angular/material/badge';
import { MatRippleModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { ToastrModule } from 'ngx-toastr';
import { MatListModule } from '@angular/material/list';
import { NgxCurrencyModule } from "ngx-currency";
import { NgxSpinnerModule } from "ngx-spinner";
import { SwiperModule } from "swiper/angular";

import { SmallTextPipe } from 'src/app/pipes/small-text.pipe';
import { SizeFilePipe } from 'src/app/pipes/size-file.pipe';
import { CarouselComponent } from './components/carousel/carousel.component';
import { StarRaterComponent } from './components/star-rater/star-rater.component';
import { ColorPreviewComponent } from './components/color-preview/color-preview.component';

@NgModule({
  declarations: [
    SmallTextPipe,
    SizeFilePipe,
    CarouselComponent,
    StarRaterComponent,
    ColorPreviewComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatMenuModule,
    MatButtonToggleModule,
    ToastrModule.forRoot(),
    MatExpansionModule,
    DragDropModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatRippleModule,
    MatRadioModule,
    MatBottomSheetModule,
    MatListModule,
    
    NgxCurrencyModule,
    NgxSpinnerModule.forRoot({ type: 'ball-scale-multiple' }),
    SwiperModule
    
  ],
  exports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatSliderModule,
    MatStepperModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    MatMenuModule,
    MatTooltipModule,
    ToastrModule,
    MatExpansionModule,
    DragDropModule,
    MatAutocompleteModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatRippleModule,
    MatRadioModule,
    MatListModule,
    NgxCurrencyModule,
    NgxSpinnerModule,
    SwiperModule,
    SmallTextPipe,
    SizeFilePipe,
    CarouselComponent,
    StarRaterComponent,
    ColorPreviewComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}