class Singleton {
    constructor() {
      if (!Singleton.instance) {
        Singleton.instance = this;
      }
  
      return Singleton.instance;
    }
  
    // Métodos da classe Singleton
  }
  
  const instance1 = new Singleton();
  const instance2 = new Singleton();
  
  console.log(instance1 === instance2); // Output: true, ambas as instâncias são iguais
  