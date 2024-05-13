// Subsystem1
class Heater {
    turnOn() {
      console.log('Aquecedor ligado');
    }
  
    turnOff() {
      console.log('Aquecedor desligado');
    }
  }
  
  // Subsystem2
  class AirConditioner {
    turnOn() {
      console.log('Ar condicionado ligado');
    }
  
    turnOff() {
      console.log('Ar condicionado desligado');
    }
  }
  
  // Facade
  class HomeAutomationFacade {
    constructor() {
      this.heater = new Heater();
      this.airConditioner = new AirConditioner();
    }
  
    leaveHome() {
      this.heater.turnOff();
      this.airConditioner.turnOff();
    }
  
    arriveHome() {
      this.heater.turnOn();
      this.airConditioner.turnOn();
    }
  }
  
  // Usage
  const homeFacade = new HomeAutomationFacade();
  homeFacade.leaveHome(); // Aquecedor desligado, Ar condicionado desligado
  homeFacade.arriveHome(); // Aquecedor ligado, Ar condicionado ligado
  