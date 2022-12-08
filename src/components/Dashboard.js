import React from 'react';
import "../App.css";
import { ArrowForward, ArrowBack, DirectionsCar, LocalParking } from '@mui/icons-material';
import axios from "axios";
import { useEffect, useState } from "react";
import LoadingSpinner from './LoadingSpinner';


const in_out = {
  color: "green",
  height: "100%",
  width: "100%"
}

const taken = {
  backgroundColor: "red",
  color: "lightblue",
  height: "100%",
  width: "100%"
}

function Park(props) {

  if (props.value == 'park') {
    return (
      <button className='park' onClick={props.onClick}>
        <LocalParking className='hover_p'>FREE</LocalParking>
        <p className='hover_text'>{props.carpark.parking_space}</p>
      </button>
    )

  } else if (props.value == 'taken') {
    return (
      <button className='taken' onClick={props.onClick}>
        <DirectionsCar sx={taken}></DirectionsCar>
        <p className='hover_p'>{props.carpark.parking_space}</p>
      </button>
    )

  } else {
    return (
      <button className="" onClick={props.onClick}>
        ERROR
      </button>
    )
  }

}


class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      parkState: Array(18).fill('park'),
      carparks: Array(18).fill(null),
      isLoading: true
    }
  };


  componentDidMount() {

    axios.get(`http://localhost:8000/carpark/`)
      .then(res => {
        setTimeout(() => {
          const carparks = res.data;
          this.setState({ isLoading: false, carparks: carparks });

          const parkState = this.state.parkState.slice();
          
          for (let i = 0 ; i<parkState.length ; i++){
            if(this.state.carparks[i].number_plate==''){
              parkState[i]='park';
            }else{
              parkState[i]='taken';
            }
          }
  
          this.setState({parkState:parkState});

        }, 500);

      })
  }

  handleClick(i) {
    const parkState = this.state.parkState.slice();

    parkState[i] = 'taken';
    //should probably update the json db here as well or it reverts on next page load/refresh
    //would need to get the current logged in user data including numberplate and send a PUT request

    this.setState({
      parkState: parkState,
    });

  }

  takenClick(i) {
    const name = this.state.carparks[i].first_name + " " + this.state.carparks[i].last_name
    
    alert(`This carpark is taken by ${name == " " ? "unknown" : name}\n number plate: ${this.state.carparks[i].number_plate}`)

  }

  renderSquare(i) {
    if(this.state.parkState[i]=='park'){
      return (<Park value={this.state.parkState[i]}
        onClick={() => this.handleClick(i)} carpark={this.state.carparks[i]} />);
    }else{
      return (<Park value='taken'
        onClick={() => this.takenClick(i)} carpark={this.state.carparks[i]} />);
    }

    
  };




  render() {

    if (this.state.isLoading) {
      return (
        <div><LoadingSpinner></LoadingSpinner></div>
      )
    } else {
      return (
        <div class="main-bg" >
          <div class="carpark">
            <div></div>
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
            {this.renderSquare(3)}
            <div></div>

            <div class="road"><ArrowForward sx={in_out}></ArrowForward></div>
            <div class="road"></div>
            <div class="road"></div>
            <div class="road"></div>
            <div class="road"></div>
            {this.renderSquare(4)}

            <div class="road"></div>
            {this.renderSquare(5)}
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            <div class="road"></div>
            {this.renderSquare(8)}

            <div class="road"></div>
            {this.renderSquare(9)}
            {this.renderSquare(10)}
            {this.renderSquare(11)}
            <div class="road"></div>
            {this.renderSquare(12)}

            <div class="road"><ArrowBack sx={in_out}></ArrowBack></div>
            <div class="road"></div>
            <div class="road"></div>
            <div class="road"></div>
            <div class="road"></div>
            {this.renderSquare(13)}

            <div></div>
            {this.renderSquare(14)}
            {this.renderSquare(15)}
            {this.renderSquare(16)}
            {this.renderSquare(17)}
            <div></div>

          </div>
        </div>
      )

    }

  }
}


export default Dashboard;