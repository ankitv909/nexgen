import React, { Component } from 'react'
import './task2.css'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography/Typography'
const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
        width: '100%'
    },
    paddingTop: {
        paddingTop: '2rem'
    },
    margintop: {
        marginTop: theme.spacing.unit * 3
    },
    marginsocialLR: {
        marginLeft: theme.spacing.unit * 4,
        marginRight: theme.spacing.unit * 4
    }
})

class Task2 extends Component {
    constructor (props) {
        super(props)
        document.title = 'Task2'
        this.state = {
            value: 0
        }
    }

    render () {
        const { classes } = this.props
        return (
            <div className='task2' style={{width: '100%'}}>
                <Grid
                    container
                    direction='row'
                    justify='center'
                    alignItems='center'>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.margintop}>
                        <Typography variant='button' className={classes.textTransform} >
                            task2
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
Task2.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Task2)
