import React, {Component} from 'react'
import {connect} from 'react-redux'
import {addStd} from '../index'
class Addstd extends Component {

    state = {
        id : 0,
        name : " ",
        surname : " "
    }



    render () {
        return (
            <div>
                <h1>ADD DATA</h1>
                id:<input type="number" name="id" onChange= { (e) =>{
                    this.setState({
                        [e.target.name] : e.target.value
                    })    
                }}/>

            
                name:<input type="text" name="name" onChange={ (e) =>{
                    this.setState({
                        [e.target.name] : e.target.value
                    })
                }
                }/>
           
                surname : <input type="text" name="surname" onChange={ (e) => {
                    this.setState({
                        [e.target.name] : e.target.value
                    })
                }
                }/>
                

                <button onClick={() => { this.props.addSTD(this.state); alert('add complete')}}>submit</button>
            </div>
        )
    }
}

export const mapStateToProps = (state) => {
    return {
        res : state.std
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        addSTD : (x) => dispatch( addStd(x))

    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Addstd)