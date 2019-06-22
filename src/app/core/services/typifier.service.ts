import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class TypifierService {
    private _codeWithTtpes: string;
    private sourceChange$: Subject<string> = new Subject();
    
    update(code: string) {
        this._codeWithTtpes = code;
        this.sourceChange$.next(code);
    }

    get(): Observable<string> {
        return this.sourceChange$.asObservable();
    }
}