// Why
enum TrafficLight {
    RED = 'Red',
    YELLOW = 'Yellow',
    GREEN = 'Green'
  }
  
  // We have load shedding
  function changeTrafficLight() {
    let currentLight: TrafficLight = TrafficLight.RED;
  
    setInterval(() => {
      console.log(`Traffic light is now: ${currentLight}`);
      
      switch (currentLight) {
        case TrafficLight.RED:
          currentLight = TrafficLight.GREEN;
          break;
        case TrafficLight.GREEN:
          currentLight = TrafficLight.YELLOW;
          break;
        case TrafficLight.YELLOW:
          currentLight = TrafficLight.RED;
          break;
      }
    }, 10000);
  }
  changeTrafficLight();
  