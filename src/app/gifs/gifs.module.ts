import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsMainComponent } from './gifs-main/gifs-main.component';
import { SearchComponent } from './search/search.component';
import { ListGifsComponent } from './list-gifs/list-gifs.component';

@NgModule({
  declarations: [GifsMainComponent, SearchComponent, ListGifsComponent],
  imports: [CommonModule],
  exports: [GifsMainComponent],
})
export class GifsModule {}
