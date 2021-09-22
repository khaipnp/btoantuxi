import React, { Component } from 'react'
import './style.css'
import { connect } from 'react-redux'

class Player extends Component {
	render() {
		return (
			<div className='playerGame'>
				<div className='the-think'>
					<img
						src={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh}
						alt={this.props.mangDatCuoc.find(item => item.datCuoc === true).hinhAnh}
					/>
				</div>
				<div className='speech-bubble'></div>
				<img style={{ width: 150, height: 150 }} src='./img/player.png' alt='player' />

				<div className='row'>
					{this.props.mangDatCuoc.map((item, index) => {
						let border = {}
						if (item.datCuoc) {
							border = { border: '3px solid yellow' }
						}
						return (
							<div className='col-4'>
								<button
									className='btnItem'
									style={border}
									onClick={() => {
										this.props.datCuoc(item.ma)
									}}>
									<img width={50} height={50} src={item.hinhAnh} alt={item.hinhAnh} />
								</button>
							</div>
						)
					})}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		mangDatCuoc: state.OneTwoThreeReducer.mangDatCuoc
	}
}

const mapDispatchToProps = dispatch => {
	return {
		datCuoc: maCuoc => {
			dispatch({
				type: 'CHON_KEO_BUA_BAO',
				maCuoc
			})
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
