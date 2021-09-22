import React, { Component } from 'react'
import './style.css'
import Player from './Player'
import Computer from './Computer'
import Result from './Result'
import { connect } from 'react-redux'

class OneTwoThree extends Component {
	render() {
		return (
			<div className='game'>
				<div className='row'>
					<div className='col-4 mt-5 text-center'>
						<Player />
					</div>
					<div className='col-4 mt-5 text-center'>
						<Result />
						<button
							className='btn btn-success p-3 display-4 mt-5'
							onClick={() => {
								this.props.playGame()
							}}>
							Chơi ngay
						</button>
					</div>
					<div className='col-4 mt-5 text-center'>
						<Computer />
					</div>
				</div>
			</div>
		)
	}
}
const mapDispatchToProps = dispatch => {
	return {
		playGame: () => {
			let count = 0
			let randomComputerItem = setInterval(() => {
				dispatch({
					type: 'RANDOM'
				})
				count++
				if (count >= 6) {
					clearInterval(randomComputerItem)
					dispatch({
						type: 'END_GAME'
					})
				}
			}, 100)
		}
	}
}
export default connect(null, mapDispatchToProps)(OneTwoThree)
