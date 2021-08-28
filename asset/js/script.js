
/*--------------------
Vars
--------------------*/
let speed = 0
let acc = 0
let hover = false
let width
let times
let cloned = []

const item = document.querySelector('.move-item')
const word = item.querySelector('.move-text')


/*--------------------
Calculate
--------------------*/
const calculate = () => {
  console.log('cloned', cloned)
  cloned.forEach(i => {
    i.parentNode.removeChild(i)
  })
  cloned = []
  
  width = Math.ceil(word.clientWidth)
  times = Math.ceil(window.innerWidth / width)
  
  item.style.width = `${(times + 1) * width}px`

  for (let i = 0; i < times + 1; i++) {
    const clone = word.cloneNode(true)
    word.parentNode.appendChild(clone)
    cloned.push(clone)
  }
}
 

/*--------------------
Listeners
--------------------*/
const handleMouse = bool => hover = bool
item.addEventListener('mouseenter', () => {handleMouse(true)})
item.addEventListener('touchstart', () => {handleMouse(true)})
item.addEventListener('mouseleave', () => {handleMouse(false)})
item.addEventListener('touchend', () => {handleMouse(false)})
window.addEventListener('resize', calculate)
window.addEventListener('load', calculate)


/*--------------------
Animate
--------------------*/
const animate = () => {
  // Acceleration
  acc += 0.1
  if (hover) {
    acc -= 0.35
  }
  
  // Min/Max accelearion
  acc = Math.min(3, Math.max(0, acc))
  
  // Add acceleration to speed
  speed += acc
  
  // Text Loop
  if (speed >= width) {
    speed = 0
  }
  
  // CSS Text
  item.style.transform = `translateX(${-speed}px) skewX(${-2 * acc}deg)`
  
  // RaF
  requestAnimationFrame(animate)
}
animate()

// clock

class Clock extends React.Component {
    constructor() {
      super();
      this.state = {
        time: moment().format('LTS'),
        one: true,
        two: false,
        three: false,
        four: false,
        background: {
          backgroundColor: "#000000".replace(/0/g, function () {return (~~(Math.random() * 16)).toString(16);}) },
  
        class: '' };
  
      this.clicked = this.clicked.bind(this);
    }
    componentDidMount() {
      setInterval(() => {
        if (this.state.one == true) {
          this.setState({
            time: moment().format('LTS') });
  
        } else
        if (this.state.four == true) {
          this.setState({
            time: moment().format('LT') });
  
        }
      }, 1000);
    }
    clicked() {
      this.setState({
        background: {
          backgroundColor: "#000000".replace(/0/g, function () {return (~~(Math.random() * 16)).toString(16);}) } });
  
  
      if (this.state.one == true) {
        this.setState({ class: 'faded' });
        setTimeout(() => {
          this.setState({
            time: moment().format('l'),
            one: false,
            two: true,
            class: '' });
  
        }, 200);
      } else
      if (this.state.two == true) {
        this.setState({ class: 'faded' });
        setTimeout(() => {
          this.setState({
            time: moment().format('MMMM Do YY'),
            two: false,
            three: true,
            class: '' });
  
        }, 200);
      } else
      if (this.state.three == true) {
        this.setState({ class: 'faded' });
        setTimeout(() => {
          this.setState({
            time: moment().format('LT'),
            three: false,
            four: true,
            class: '' });
  
        }, 200);
      } else
      if (this.state.four == true) {
        this.setState({ class: 'faded' });
        setTimeout(() => {
          this.setState({
            time: moment().format('LTS'),
            four: false,
            one: true,
            class: '' });
  
        }, 200);
      }
    }
    render() {
      return (
        React.createElement("div", { id: "clock", style: this.state.background, onClick: this.clicked },
        React.createElement("h1", { className: this.state.class }, this.state.time)));
  
  
    }}
  
  
  class Instruction extends React.Component {
    render() {
      return (
        React.createElement("p", { id: "instruction" }, "Click anywhere to change formats"));
  
    }}
  
  
  class App extends React.Component {
    render() {
      return (
        React.createElement("div", null,
        React.createElement(Instruction, null),
        React.createElement(Clock, null)));
  
  
    }}
  
  
  ReactDOM.render(React.createElement(App, null), document.getElementById('app'));

      //work circlesvg  
      let scrollTop = $(window).scrollTop() + $(window).height();
      
      if( scrollTop >  $(".checkpath").offset().top ){
        $(".checkpath").addClass("animate");
    }
    
