import React, { Component } from 'react'
import './part1.css'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography/Typography'
import FormControl from "@material-ui/core/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";

const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
        width: '100%'
    },
    paddingTop: {
        paddingTop: '2rem'
    },
    margintop: {
        marginTop: theme.spacing.unit * 2
    },
    marginsocialLR: {
        marginLeft: theme.spacing.unit * 4,
        marginRight: theme.spacing.unit * 4
    },
    colr:{
        color:'#39B2C4'
    },
    color:{
        color:'#707070'
    },
    /*    bullet: {
            display: 'inline-block',
            margin: '0 20px',
            transform: 'scale(0.8)',
            borderRadius: 24,
            boxShadow:'0px 0px 3px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)',
            backgroundColor:'#FFFFFF',
            marginLeft:theme.spacing.unit ,

        },*/
    avatar:{
        width:12,
        height:'auto',
        padding:6
    },
    textjoin:{
        textTransform:'none',
        color: '#6B7678',
        textAlign:'left',
    },
    paper:{
        color: '#ffffff',
        paddingLeft: theme.spacing.unit * 10 ,
        paddingRight: theme.spacing.unit * 10,
        paddingTop: theme.spacing.unit * 1,
        paddingBottom: theme.spacing.unit * 1 ,
        width:'100%',
        borderRadius: 0,
        backgroundColor:'#257CBF',
        boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)'
    },
    bigAvatar: {
        margin: 10,
        width: 50,
        height: 50,
        backgroundColor:'#ffffff'
    },
    imgres:{
        width:'40%',
        height:'auto'
    },
    Margin:{
        marginTop:theme.spacing.unit * 5,
    },
    ans: {
        color: '#707070',
        '&$checked': {
            color: '#39B2C4',
        },
    },
    checked: {},
    formControl: {
        marginLeft: 0,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
        marginLeft:0
    },
});

class Part1 extends Component {
    constructor (props) {
        super(props);
        document.title = 'Part 1';
        this.state = {
            value: 'female',
            selectedValue: 'a',
        }
    }
    handleChange = event => {
        this.setState({ value: event.target.value });
    };

    render () {
        const { classes } = this.props;
        return (
            <div className='part1' style={{width: '100%'}}>
                <Grid
                    container
                    direction='row'
                    justify='center'
                    alignItems='center' item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid item xs={10} sm={10} md={10} lg={11} xl={10} className={classes.margintop}>
                        <Typography variant="button"  gutterBottom>
                            Question 1-10
                        </Typography>
                        <div style={{marginTop:'1rem'}}>
                            <FormControl component="fieldset" className={classes.formControl}>
                                <Typography >
                                    <span> Q.1</span>  <span > Do you work or are you a student?</span>
                                </Typography>
                                <RadioGroup
                                    aria-label="Gender"
                                    name="gender1"
                                    className={classes.group}
                                    value={this.state.value}
                                    onChange={this.handleChange}
                                >
                                    <FormControlLabel value="female" control={<Radio  classes={{root: classes.ans, checked: classes.checked,}}/>} label={<Typography >
                                        the largest waterfall worldwide.
                                    </Typography>} />
                                    <FormControlLabel value="male" control={<Radio  classes={{root: classes.ans, checked: classes.checked,}} />} label={<Typography >
                                        the largest waterfall worldwide.
                                    </Typography>} />
                                    <FormControlLabel value="other" control={<Radio  classes={{root: classes.ans, checked: classes.checked,}} />} label={<Typography >
                                        the biggest sub-tropical rainforest in the world.
                                    </Typography>} />
                                </RadioGroup>
                            </FormControl>
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
Part1.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Part1)
