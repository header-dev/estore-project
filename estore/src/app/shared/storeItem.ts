import { BehaviorSubject, Observable } from 'rxjs';

export class StoreItem<T> {
  private _state: BehaviorSubject<T>;

  constructor(initialState: T) {
    this._state = new BehaviorSubject(initialState);
  }

  get state$(): Observable<T> {
    return this._state.asObservable();
  }

  setState(newState: T): void {
    this._state.next(newState);
  }

  get state(): T {
    return this._state.value;
  }
}
