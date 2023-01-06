import { NgModule } from '@angular/core';
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

import { NgCircleProgressModule } from 'ng-circle-progress';
import { ToastrModule } from 'ngx-toastr';

import { SmallTextPipe } from 'src/app/pipes/small-text.pipe';
import { SizeFilePipe } from 'src/app/pipes/size-file.pipe';

@NgModule({
  declarations: [
    SmallTextPipe,
    SizeFilePipe
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
    NgCircleProgressModule.forRoot({
      radius: 38,
      outerStrokeWidth: 8,
      innerStrokeWidth: 1,
      outerStrokeColor: "#7315F7",
      innerStrokeColor: "#FFBF00",
      animation: true,
      animationDuration: 300,
      showSubtitle: false
    })
  ],
  exports: [
    SmallTextPipe,
    SizeFilePipe,
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
    NgCircleProgressModule,
    MatDialogModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatRippleModule,
  ]
})
export class SharedModule {}