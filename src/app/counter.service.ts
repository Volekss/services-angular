

export class CounterService {
  activeToInactive = 0;
  inactiveToActive = 0;

  incrementActiveToInactive() {
    this.activeToInactive++;
    console.log('Active to ingit active ' + this.activeToInactive);
  }

  incrementInactiveToActive() {
    this.inactiveToActive++;
    console.log('Inactive to active ' + this.inactiveToActive);
  }

}
