import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import TodoItem from './components/TodoItem.js';
import TrafficLight from './components/trafficlight.js';
import TickAll from './img/tick.png';
import UnTickAll from './img/multiply.png';

const RED = 0;
const YELLOW = 1;
const GREEN = 2;

class App extends Component {

  constructor() {
    super();
    this.state = {
        newitem: '',
        currentColor: YELLOW,
        workArray: [{title:"đi mua nước ngọt", isDone: true},
                    {title: "chơi game", isDone : false},
                    {title:"đá bóng",isDone: false}]
    }

    setInterval(() =>
    {
        this.setState({
            currentColor: this.SwitchingColor(this.state.currentColor)
        })
    },1000);

    this.selectedItem = this.selectedItem.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
    this.allsectect= this.allsectect.bind(this);
    this.allUnTick = this.allUnTick.bind(this);
    this.onsubmit =this.onsubmit.bind(this);
}

// Immutability hiểu môn na là không thay đổi thằng chính mà chỉ thay đổi thằng giống nó và sau đó làm gì thì tùy vào từng tình huống của bài
selectedItem (index) 
{
  //c1
  return (e) => {
    const tempWorkArray = [...this.state.workArray]
    console.log(!tempWorkArray[index].isDone)
    tempWorkArray[index].isDone = !tempWorkArray[index].isDone
    this.setState({
      workArray: tempWorkArray
    })
  }
  //c2
  // const tempWorkArray = [...this.state.workArray]
  //   console.log(!tempWorkArray[index].isDone)
  //   tempWorkArray[index].isDone = !tempWorkArray[index].isDone
  //   this.setState({
  //     workArray: tempWorkArray
  //   })
}

onKeyUp(e) {
  let enter = e.keyCode
  let value = e.target.value

  value = value.trim();
  if(!value) return;
  if(enter === 13)
  {
    this.setState({
      newitem: '',
      workArray: [
        {title: value, isDone: false},
        ...this.state.workArray
      ]
    })
  }
}

onChange(e) {
  this.setState({
    newitem: e.target.value,
  })
}

onsubmit() {
  this.setState({
    workArray: [
      {title: this.state.newitem, isDone: false},
      ...this.state.workArray
    ],
    newitem: '',
  })
}

allsectect(){
  var temp = this.state.workArray
  temp.forEach(element => {
    element.isDone = true
  });

  this.setState({
    workArray: temp
  })
}

allUnTick() {
  var temp = this.state.workArray
  temp.forEach(element => {
    element.isDone = false 
  });

  this.setState({
    workArray: temp
  })
}

SwitchingColor (color) 
{
    switch (color) 
    {
        case RED:
            return YELLOW;
        case YELLOW:
            return GREEN;
        case GREEN: 
            return RED;
        default:
            return RED;
    }
};

  render()
  {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {/* this is first method  */}
          {/* use operator && to binding data to display on screen 
          if workArray.length bigger than zero display on screen the list of workArray */}
          <div className="inputtodoitem">
            <img src={TickAll} alt="" onClick={this.allsectect}/>
            <img src={UnTickAll} alt="" onClick={this.allUnTick}/>
            <input type="text" placeholder="Enter a todo work" 
            onKeyUp={this.onKeyUp} 
            value={this.state.newitem} 
            onChange={this.onChange}/>
            <button  onClick={this.onsubmit}>Submit</button>
          </div>
          {this.state.workArray.length > 0 && <ul className="todoitem">
            {
              // c1
              this.state.workArray.map((item,index) => 
              <TodoItem key={index} 
                item={item} 
                onclick={this.selectedItem(index)}>
              </TodoItem>)
              // c2
              // in line 4 have or don't have e variable is not important, e variable is not nesecssary
              // this.state.workArray.map((item,index) => 
              // <TodoItem key={index} 
              //   item={item} 
              //   onclick={() => this.selectedItem(index)}>
              // we can overwrite above line by onclick={(e) => this.selectedItem(e,index)} => this line understand easier than above line
              // </TodoItem>)
            }
          </ul>}
          {/* else workArray.length equal zero display on screen "nothing here!" */}
          {this.state.workArray.length === 0 && 'nothing here!'}
          
          {/* this is a second method 
          using if else to display on screen 
          if workArray.length > 0 
            return the list of workArray
          else
            return nothing here! */}

          {/* add traffic-light */}
        </header>
        <div>
          <TrafficLight currentColor = {this.state.currentColor}/>
        </div>
      </div>
  
  );
  }

}

export default App;
