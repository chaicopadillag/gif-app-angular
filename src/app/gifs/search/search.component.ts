import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [],
})
export class SearchComponent {
  constructor(private gifsService: GifsService) {}

  @ViewChild('search') search!: ElementRef<HTMLInputElement>;

  searchGifs() {
    const searchKey = this.search.nativeElement.value;
    if (searchKey.trim().length < 1) return;
    this.gifsService.searchGifsByName(searchKey.trim().toLocaleLowerCase());
    this.search.nativeElement.value = '';
  }
}
