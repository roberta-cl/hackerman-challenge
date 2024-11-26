import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  characterName: string = '';
  character: any = null;
  loading: boolean = false;
  characterError: boolean = false;

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    const lastSearch = localStorage.getItem('characterName');
    if (lastSearch) {
      this.character = JSON.parse(lastSearch);
    }
  }

  isCharacterValid(): boolean {
    return this.characterName.length >= 1;
  }

  fetchCharacter(): void {
    if (!this.characterName) return;

    this.loading = true;
    this.characterError = false;

    this.apiService
      .getCharacter(this.characterName)
      .then((response) => {
        if (response.results.length === 0) {
          throw new Error('Personagem inválido!');
        }

        this.character = {
          ...response.results[0],
          filmTitles: [],
          starshipNames: [],
          vehicleNames: [],
          speciesNames: [],
          homeWorldNames: [],
        };

        return Promise.all([
          this.fetchNames(this.character.films, true),
          this.fetchNames(this.character.starships, false),
          this.fetchNames(this.character.vehicles, false),
          this.fetchNames(this.character.species, false),
          this.fetchNames([this.character.homeworld], false),
        ]);
      })
      .then(([films, starships, vehicles, species, homeworld]) => {
        this.character.filmNames = films;
        this.character.starshipNames = starships;
        this.character.vehicleNames = vehicles;
        this.character.speciesNames = species;
        this.character.homeWorldNames = homeworld;

        localStorage.setItem('characterName', JSON.stringify(this.character));
      })
      .catch((error) => {
        console.error('Erro ao buscar personagem:', error);
        this.characterError = true;
      })
      .finally(() => {
        setTimeout(() => {
          this.loading = false;
        }, 1500);
      });
  }

  fetchNames(urls: string[], isFilm: boolean = false): Promise<string[]> {
    return Promise.all(
      urls.map((url) =>
        this.apiService
          .getData(url)
          .then((data) => (isFilm ? data.title : data.name))
      )
    );
  }

  resetCharacter(): void {
    this.character = null;
    this.characterName = '';
    this.characterError = false;
    localStorage.removeItem('characterName');
  }
}
