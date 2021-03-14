import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddToFavoritesRoutingModule } from './add-to-favorites-routing.module';
import { AddToFavoritesComponent } from './components/add-to-favorites/add-to-favorites.component';
import { AddToFavoritesService } from './services/add-to-favorites.service';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { AddToFavoritesEffect } from './store/effects/add-to-favorites-effect';

@NgModule({
  declarations: [AddToFavoritesComponent],
  imports: [
    CommonModule,
    AddToFavoritesRoutingModule,
    HttpClientModule,
    EffectsModule.forFeature([AddToFavoritesEffect]),
  ],
  exports: [AddToFavoritesComponent],
  providers: [AddToFavoritesService],
})
export class AddToFavoritesModule {}
