// Why
var TrafficLight;
(function (TrafficLight) {
    TrafficLight["RED"] = "Red";
    TrafficLight["YELLOW"] = "Yellow";
    TrafficLight["GREEN"] = "Green";
})(TrafficLight || (TrafficLight = {}));
// We have load shedding
function changeTrafficLight() {
    var currentLight = TrafficLight.RED;
    setInterval(function () {
        console.log("Traffic light is now: ".concat(currentLight));
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
