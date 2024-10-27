import { Component, Input } from '@angular/core';
import {
  IconDefinition,
  faStar,
  faStarHalfStroke,
} from '@fortawesome/free-solid-svg-icons';

import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-ratings',
  templateUrl: './ratings.component.html',
  styleUrls: ['./ratings.component.scss'],
})
export class RatingsComponent {
  faStar = faStar;
  faStarHalfStroke = faStarHalfStroke;
  faStarEmpty = faStarEmpty;

  stars: IconDefinition[] = [];
  private _score: number = 0;
  @Input()
  set score(value: number) {
    this._score = value > 5 ? 5 : value;
    const solidStartCount: number = Math.floor(this._score);

    for (let i: number = 0; i < solidStartCount; i++) {
      this.stars.push(faStar);
    }

    if (
      this._score - solidStartCount > 0 &&
      this._score - solidStartCount < 1
    ) {
      this.stars.push(faStarHalfStroke);
    }

    for (let i: number = this.stars.length; i < 5; i++) {
      this.stars.push(faStarEmpty);
    }
  }
}
