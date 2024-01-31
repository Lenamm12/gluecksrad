
const jsConfetti = new JSConfetti()

let wheel = document.querySelector('.wheel');
let stopBtn = document.querySelector('.stopBtn');
let startBtn = document.querySelector('.startBtn');
let value = Math.ceil(Math.random() * 3600);
let started = false;
let stopped = false;

wheel.onclick = function () {
    wheelInteraction()
}

startBtn.onclick = function () {
    wheelInteraction()
}

stopBtn.onclick = function () {
    wheelInteraction()
}


function wheelInteraction() {
    if (started == false && stopped == false) {
        startBtn.style.visibility = "hidden";
        wheel.classList.add("rotating");
        started = true
    }
    else if (started == true && stopped == false) {
        let ergebnis = document.querySelector('input[name="Ergebnis"]:checked').value;
        let win = (ergebnis=="Gewonnen");

        wheel.classList.remove("rotating");
      
        value += 100;
        
        if (win == true) {  
            wheel.classList.add("stop-rotating-win");
            setTimeout(function () {
                balloons()
                jsConfetti.addConfetti()
            }, value);
        }
        else{
            wheel.classList.add("stop-rotating-lose");
        }
        stopped = true
    }
}

function balloons() {
    const bdayBallons = (function () {
        const density = 20;
        const balloons = [];
        const colors = ['yellow', 'green', 'blue', 'red', 'white', 'black'];

        const stringElement = document.createElement("div");
        stringElement.setAttribute("id", "balloons");
        stringElement.classList.add("string");

        for (let i = 0; i < density; i++) {
            const element = document.createElement("div");
            element.classList.add("balloon");
            element.classList.add(randomColor());

            element.append(stringElement.cloneNode());
            document.body.append(element);

            setTimeout(() => {
                releaseBalloon(element);
            }, (i * 100) + random(50, 100));
        }

        function randomColor() {
            return colors[random(0, colors.length)];
        }

        function random(min, max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }

        function releaseBalloon(balloon) {
            const x = random(1, 100);
            const y = random(1, 100);

            const sequence = [{
                transform: ` translate(${x}vw, 0) rotateZ(45deg)`
            }];

            sequence.push({
                transform: ` translate(${x}vw, -120vh) rotateZ(45deg)`
            });

            const balloonAnimation = balloon.animate(sequence, {
                duration: 3000,
                iterations: 1
            });

        }
    })();

}