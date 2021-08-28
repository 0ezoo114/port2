const hands = {
    second: document.querySelector('.hand.second'),
    minute: document.querySelector('.hand.minute'),
    hour: document.querySelector('.hand.hour')
  };
  
  let prevTime = new Date();
  
  const rotate = (el, deg) => {
    el.style.transform = `rotate(${deg}deg)`;
  };
  
  const resetCycle = el => {
    rotate(el, 360);
    setTimeout(() => {
      el.classList.add('no-transition');
      rotate(el, 0);
    },900);
  }
  
  const updateHand = (el, value, denominator) => {
    el.classList.remove('no-transition');
    if(value === 0) {
      resetCycle(el);
    }
    else {
      rotate(el, (360/denominator)*value);
    }
  }
  
  const updateSeconds = () => {
    const date = new Date();
    if(prevTime.getSeconds() !== date.getSeconds()) {
      updateHand(hands.second, date.getSeconds(), 60);
    }
  };
  
  const updateMinutes = () => {
    const date = new Date();
    if(prevTime.getMinutes() !== date.getMinutes()) {
      updateHand(hands.minute, date.getMinutes(), 60);
    }
  };
  
  const updateHours = () => {
    const date = new Date();
    if(prevTime.getHours() !== date.getHours()) {
      updateHand(hands.hour, date.getHours(), 12);
    }
  };
  
  const updateTime = () => {
    setTimeout(() => {
      const d = new Date();
      
      updateSeconds();
      updateMinutes();
      updateHours();
      
      prevTime = d;
      updateTime();
    }, 50);
  };
  
  // Set the hands initial rotation (without a transition)
  rotate(hands.second, (360/60)*prevTime.getSeconds());
  rotate(hands.minute, (360/60)*prevTime.getMinutes());
  rotate(hands.hour, (360/12/60)*(prevTime.getHours()*60 + prevTime.getMinutes()));
  
  // Begin updating the time
  updateTime();