import React, {Component} from 'react'
import './rating.css'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Rater from 'react-rater'
import 'react-rater/lib/react-rater.css'

const styles = theme => ({
});

class Rating extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.handleRate = this.handleRate.bind(this);
    };
    handleRate(event) {
        alert(this.handleRate.bind(this));
    }
    render() {
        /*const {classes} = this.props;*/
        return (
            <div className='rating' >
                <Rater total={5} rating={2}  interactive={true} onRate={this.handleRate.bind(this)}/>
            </div>
        )
    }
}

Rating.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Rating)
