import React from 'react';
import './App.css';
import Item from "./components/Item/Item";
import track from "../src/assets/dog.mp3";

class App extends React.Component {
    state = {
        itemsCount: 9,
        currentIndex: '',
        counter: 0,
        speed: 1000,
    };
    setIntervalId = '';

    componentDidMount() {
      this.setIntervalId = setInterval( this.changeIndex, this.state.speed)
    }

    changeIndex = () => {
        let randomIndex = +Math.floor(Math.random() * this.state.itemsCount);
        this.setState({
            currentIndex: randomIndex
        })
    };

    catchDog = () => {
        let audio = new Audio(track);
        audio.currentTime = 0;
        audio.play();
        clearInterval(this.setIntervalId);
        console.log(this.state.speed);
        this.setIntervalId = setInterval( this.changeIndex, this.state.speed);

        this.setState({
            counter: this.state.counter + 1,
            speed: this.state.speed - 50
        })
    };

    render() {
        let items = [];
        for (let i = 1; i <= this.state.itemsCount; i++) {
            items.push(i);
        }
        return (
            <div className={'App'}>
                <div className={'game'}>
                    { items.map( i => {
                        if (i === this.state.currentIndex) {
                            return <Item key={i} classItem={'photo show'} catchDog={this.catchDog}/>
                        } else {
                            return <Item key={i} classItem={'photo'} />
                        }
                    })}
                </div>
                <div className={'counter'}>
                    <span>Количество попаданий: {this.state.counter}</span>
                </div>
            </div>
        )
    }
}

export default App;
