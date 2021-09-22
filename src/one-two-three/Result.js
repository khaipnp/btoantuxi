import React, { Component } from 'react'
import { connect } from 'react-redux'

class Result extends Component {
	render() {
		return (
			<div>
				<div className='display-4 text-warning'>{this.props.ketQua}</div>
				<div className='display-4'>
					Số lần thắng:
					<span className='text-warning'>{this.props.soBanThang}</span>
				</div>
				<div className='display-4'>
					Tổng số lần chơi:
					<span className='text-warning'>{this.props.soBanChoi}</span>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		ketQua: state.OneTwoThreeReducer.ketQua,
		soBanThang: state.OneTwoThreeReducer.soBanThang,
		soBanChoi: state.OneTwoThreeReducer.soBanChoi
	}
}

export default connect(mapStateToProps, null)(Result)
