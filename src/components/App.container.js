import { connect } from 'react-redux'
import { addQuestion } from './../actions'
import App from './App.js'

const mapStateToProps = state => ({
    responses: state.responses
});

const mapDispatchToProps = dispatch => ({
    addQuestion: question => dispatch(addQuestion(question))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);