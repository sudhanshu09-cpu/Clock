function rotateHands() {
    const now = new Date();
    const hours = now.getHours() % 12;
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    
    const hourHand = document.getElementById('hr');
    const minuteHand = document.getElementById('mn');
    const secondHand = document.getElementById('sc');
    
    const hourDeg = (hours * 30) + (0.5 * minutes); // 30 degrees per hour, 0.5 degrees per minute
    const minuteDeg = (minutes * 6) + (0.1 * seconds); // 6 degrees per minute, 0.1 degrees per second
    const secondDeg = seconds * 6; // 6 degrees per second
    
    hourHand.style.transform = `rotate(${hourDeg}deg)`;
    minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
    secondHand.style.transform = `rotate(${secondDeg}deg)`;

    //digital clock

    const hour = document.getElementById('hour');
    const minute = document.getElementById('minute');
    const second = document.getElementById('second');
    const ampm = document.getElementById('ampm');

    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();

    hour.innerHTML = h;
    minute.innerHTML = m;
    second.innerHTML = s;
}

rotateHands(); // To initially set the clock hands
setInterval(rotateHands, 1000); // To update the clock hands every second