import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, forkJoin } from 'rxjs';
import { Applicatie } from '../modals/applicatie';
import { ApplicatieService } from '../services/applicatie.service';
import { BestandService } from '../services/bestand.service';
import { map } from 'rxjs/operators';

@Injectable({
          providedIn: "root"
})
export class BestandenResolver implements Resolve<{}> {
          constructor(private bestandService: BestandService) { }

          resolve(
                    route: ActivatedRouteSnapshot,
                    state: RouterStateSnapshot
          ): Observable<{}> {
                    let a = this.bestandService.getFile$(route.params["id"], "reispaspoort");
                    let b = this.bestandService.getFile$(route.params["id"], "attest");
                    let c = this.bestandService.getFile$(route.params["id"], "diploma");
                    let join = forkJoin(a, b, c);
                    return join;
          }
}
