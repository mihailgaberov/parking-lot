class ParkingLot {
  slots = [];

  constructor(parkingSize) {
    this.slots = new Array(parkingSize).fill(null);
  }

  park(carId) {
    console.log(`Parking car: ${carId}`);
    if (this.slots.every((slot) => slot !== null)) {
      return false;
    }

    for (let i = 0; i <= this.slots.length; i++) {
      const slot = this.slots[i];

      if (slot === null) {
        this.slots[i] = carId;
        return true;
      }
    }
  }

  getSlots() {
    console.log(`Parking slots: ${this.slots}`);
    return this.slots;
  }

  remove(carId) {
    console.log(`Leaving car: ${carId}`);
    if (this.slots.every((slot) => slot !== carId)) {
      return false;
    }

    for (let i = 0; i <= this.slots.length; i++) {
      const slot = this.slots[i];

      if (slot === carId) {
        this.slots[i] = null;
        return true;
      }
    }
  }
}

export default ParkingLot;
