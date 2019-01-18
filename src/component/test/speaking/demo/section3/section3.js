import React, { Component } from 'react'
import './section3.css'
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

class Section3 extends Component {
    constructor (props) {
        super(props)
        document.title = 'SEC 3'
        this.state = {
            value: 0
        }
    }

    render () {
        const { classes } = this.props
        return (
            <div className='section3' style={{width: '100%'}}>
                <title>PART III</title>
                <Grid
                    container
                    direction='row'
                    justify='center'
                    alignItems='center'>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.margintop}>
                        <Typography variant='button' className={classes.textTransform} >
                            SEC 3
                        </Typography>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
Section3.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Section3)
