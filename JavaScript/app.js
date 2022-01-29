
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

const setDate = () =>{
    const now = new Date();

    // seconds 
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;

    // minutes
    const mins= now.getMinutes();
    const minsDegree = ((mins / 60) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegree}deg)`;
    
    // hourse
    const hours= now.getHours();
    const hoursDegree = ((hours / 60) * 360) + 90;
    hoursHand.style.transform = `rotate(${hoursDegree}deg)`;
    
}
setInterval(setDate, 1000);