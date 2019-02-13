import React, {Component} from 'react'
import './volume.css'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Grid from "@material-ui/core/Grid";

const styles = theme => ({
    progress: {
        width: '100%',
        height: '6px',
        backgroundColor: '#Ffffff',
        borderRadius:2
    },
    innerprogress: {
        position: 'relative',
        width: '90%',
        height: '6px',
        backgroundColor: '#F8A662',
        transition: '100ms linear'
    },
    circle: {
        top: -3,
        right: 0,
        width: 12,
        height: 12,
        position: 'absolute',
        boxShadow: '0px 0px 0px 1px #827d7d6b',
        backgroundColor: '#F8A662',
        borderRadius: 50
    }
});

class Volume extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    };



    render() {
        const {classes, progress} = this.props;
        return (
            <div className='volume' style={{width:'100%'}} >
                <Grid container direction="row" justify="flex-end" alignItems="center">
                    <Grid container justify="flex-end" item xl={4} lg={4} md={4} sm={4}><img src="/assets/volume.svg" alt="baseline" className={classes.imgres}/></Grid>
                    <Grid container justify="flex-end" item xl={2} lg={3} md={4} sm={6}>
                        <div className={classes.progress}><div className={classes.innerprogress} style={{width: progress + '%'}}>
                            <div className={classes.circle}></div>
                        </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

Volume.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Volume)
