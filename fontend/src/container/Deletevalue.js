import React , {Component} from 'react'
import {connect} from 'react-redux'
import { deletevaluebyId} from '../index'

class Deletevalue extends Component {

    state = {
        id : 0
    }

    render(){
        return (
            <div>
                del by id
                <hr/>
                id : <input type="number" name="id" onChange={ (e) => {
                    this.setState({
                        [e.target.name] : e.target.value
                    })
                }} />
                <button onClick={() => { this.props.del(this.state.id); alert('delete success') }}>submit</button>
            </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value : state.std
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        del: (id) => dispatch(deletevaluebyId(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Deletevalue);