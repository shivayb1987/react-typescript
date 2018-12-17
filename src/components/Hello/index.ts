import { connect } from 'react-redux'
import Pure from './Pure'
import { StoreState } from '../../types';
import { Dispatch } from 'redux'
import { increment, decrement } from '../../models/app'

function mapStateToProps (state: StoreState) {
  return {
    count: state.count
  }
}

function mapDispatchToProps (dispatch: Dispatch) {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Pure)
