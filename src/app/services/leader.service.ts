import { Injectable } from '@angular/core';
import {Leader} from '../shared/leader';
import {LEADERS} from '../shared/leaders';
import {Promotion} from '../shared/promotion';
import {PROMOTIONS} from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class LeaderService {

  getLeaders(): Leader[] {
    return LEADERS;
  }
  getasdleader(): Leader[] {
    return LEADERS;
  }

  getasdLeaders(id: string): Leader {
    return LEADERS.filter((leader) => (leader.id === id))[0];
  }
  getLeaderPromotion(): Leader
  {
    return  LEADERS.filter((leader) => leader.featured)[0];
  }
  constructor() { }
}
