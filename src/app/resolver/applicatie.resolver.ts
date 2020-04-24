import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Applicatie } from '../modals/applicatie';
import { ApplicatieService } from '../services/applicatie.service';

@Injectable({
          providedIn: "root"
})
export class ApplicatieResolver implements Resolve<Applicatie> {
          constructor(private applicatieService: ApplicatieService) { }

          resolve(
                    route: ActivatedRouteSnapshot,
                    state: RouterStateSnapshot
          ): Observable<Applicatie> {
                    return this.applicatieService.getApplicatieById$(route.params["id"]);
          }
}
