// Receiver
class Light {
    turnOn() {
      console.log('Luz ligada');
    }
  
    turnOff() {
      console.log('Luz desligada');
    }
  }
  
  // Command interface
  class Command {
    execute() {}
  }
  
  // ConcreteCommand
  class TurnOnCommand extends Command {
    constructor(light) {
      super();
      this.light = light;
    }
  
    execute() {
      this.light.turnOn();
    }
  }
  
  class TurnOffCommand extends Command {
    constructor(light) {
      super();
      this.light = light;
    }
  
    execute() {
      this.light.turnOff();
    }
  }
  
  // Invoker
  class RemoteControl {
    constructor() {
      this.commands = [];
    }
  
    storeAndExecute(command) {
      this.commands.push(command);
      command.execute();
    }
  }
  
  // Usage
  const light = new Light();
  const turnOnCommand = new TurnOnCommand(light);
  const turnOffCommand = new TurnOffCommand(light);
  
  const remote = new RemoteControl();
  remote.storeAndExecute(turnOnCommand); //  Luz ligada
  remote.storeAndExecute(turnOffCommand); // Luz desligada
  