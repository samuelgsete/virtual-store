import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UploadImageComponent } from './components/uploads-images/upload-image/upload-image.component';

const routes: Routes = [
  { path: 'uploads/images', component: UploadImageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}