import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GifsResultResponse } from '../interface/Gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifsService {
  public appApiUrl = 'https://api.giphy.com/v1/gifs';
  private _apiKeyGifDev = '9Y0Pjru3JAX1z0oyxpvnE61svHtVOOl6';
  private _historial: string[] = [];
  public listGifs: Gif[] = [];

  constructor(private http: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.listGifs = JSON.parse(localStorage.getItem('lastGifsSearch')!) || [];
  }

  get historial() {
    return [...this._historial];
  }

  searchGifsByName(keyword: string) {
    if (!this._historial.includes(keyword)) {
      this._historial.unshift(keyword);
      this._historial = this._historial.slice(0, 10);
      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const apiQuerys = new HttpParams()
      .set('api_key', this._apiKeyGifDev)
      .set('limit', 10)
      .set('q', keyword);

    const apiParameters = {
      params: apiQuerys,
    };

    this.http
      .get<GifsResultResponse>(`${this.appApiUrl}/search`, apiParameters)
      .subscribe(({ data }) => {
        this.listGifs = data;
        localStorage.setItem('lastGifsSearch', JSON.stringify(this.listGifs));
      });
  }
}
