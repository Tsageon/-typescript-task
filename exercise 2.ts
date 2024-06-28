//Another one
interface ICalculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    multiply(a: number, b: number): number;
    divide(a: number, b: number): number | string;
  }

  class Calculator implements ICalculator {
  
    
    private validateInput(a: number, b: number): void {
      if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('Yeah numbers please');
      }
    }
  
    
    add(a: number, b: number): number {
      this.validateInput(a, b);
      return a + b;
    }
  
    
    subtract(a: number, b: number): number {
      this.validateInput(a, b);
      return a - b;
    }
  
    
    multiply(a: number, b: number): number {
      this.validateInput(a, b);
      return a * b;
    }
  
    
    divide(a: number, b: number): number | string {
      this.validateInput(a, b);
      if (b === 0) {
        return 'Error: Division by zero is not allowed';
      }
      return a / b;
    }
  }
  
  const calculator = new Calculator();
  console.log(calculator.add(10, 5));      
  console.log(calculator.subtract(10, 5)); 
  console.log(calculator.multiply(10, 5));  
  console.log(calculator.divide(10, 5));    
  console.log(calculator.divide(10, 0));    
  