import React, { Component } from 'react'
import { connect } from 'react-redux'

class Computer extends Component {
	render() {
		let keyframe = `@keyframes randomItem${Date.now()} {
      0% {top: -50px;}
      25% {top: 100px;}
      50% {top: -50px;}
      75% {top: 100px;}
      100% {top: 0}
    }`
		return (
			<div className='playerGame'>
				<style>{keyframe}</style>
				<div className='the-think'>
					<img
						style={{ position: 'absolute', animation: `randomItem${Date.now()} 0.5s` }}
						src={this.props.computer.hinhAnh}
						alt={this.props.computer.hinhAnh}
					/>
				</div>
				<div className='speech-bubble'></div>
				<img style={{ width: 150, height: 150 }} src='./img/playerComputer.png' alt='player' />
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		computer: state.OneTwoThreeReducer.computer
	}
}

export default connect(mapStateToProps, null)(Computer)
