import React, { Component } from 'react'
import './partfirst.css'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography/Typography'
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";

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
    },
    colr:{
        color:'#39B2C4'
    },
    color:{
        color:'#707070'
    },
    bullet: {
        display: 'inline-block',
        margin: '0 20px',
        transform: 'scale(0.8)',
        borderRadius: 24,
        boxShadow:'0px 0px 3px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)',
        backgroundColor:'#FFFFFF',
        marginLeft:theme.spacing.unit ,

    },
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
    }
});

class Partfirst extends Component {
    constructor (props) {
        super(props);
        document.title = 'Part 1';
        this.state = {
            value: 0
        }
    }

    render () {
        const { classes } = this.props;
        const bull = <span className={classes.bullet}><Avatar className={classes.avatar} src="/assets/Ellipse 37.svg"/></span>;
        return (
            <div className='partfirst' style={{width: '100%'}}>
                <title>PART I</title>
                <Grid
                    container
                    direction='row'
                    justify='center'
                    alignItems='center' item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Grid item xs={10} sm={10} md={10} lg={10} xl={10} className={classes.margintop}>
                        <Typography variant="button" className={classes.colr} gutterBottom>
                            Teacher asked you the following:
                        </Typography>
                        <div style={{marginTop:'2rem'}}>
                            <Grid container item justify="flex-start" direction="column" alignItems="flex-start" xs={12} sm={12} md={12} lg={12} xl={12}>
                                <Typography className={classes.textjoin} variant="caption"  gutterBottom>
                                    {bull}
                                    Do you work or are you a student?
                                </Typography>
                                <Typography className={classes.textjoin} variant="caption"  gutterBottom>
                                    {bull}
                                    Could you describe what kind of work you do?
                                </Typography>
                                <Typography className={classes.textjoin} variant="caption"  gutterBottom>
                                    {bull}
                                    What do you like about your job?
                                </Typography>
                                <Typography className={classes.textjoin} variant="caption"  gutterBottom>
                                    {bull}
                                    What kind of job do you hope to do in 10 years’ time?
                                </Typography>
                                <Typography className={classes.textjoin} variant="caption"  gutterBottom>
                                    {bull}
                                    Do you play any sports?
                                </Typography>
                                <Typography className={classes.textjoin} variant="caption"  gutterBottom>
                                    {bull}
                                    What are the most popular sports in your country?
                                </Typography>
                                <Typography className={classes.textjoin} variant="caption"  gutterBottom>
                                    {bull}
                                    Is it better to play sport or watch it? Why?
                                </Typography>
                                <Typography className={classes.textjoin} variant="caption"  gutterBottom>
                                    {bull}
                                    Can sport be dangerous?
                                </Typography>
                                <Typography className={classes.textjoin} variant="caption"  gutterBottom>
                                    {bull}
                                    Do men and women play different sports in your country?
                                </Typography>
                            </Grid>
                        </div>
                    </Grid>
                    <Grid
                        container
                        direction='row'
                        justify='flex-start'
                        alignItems='flex-end' item xs={12} sm={12} md={12} lg={12} xl={12} className={classes.Margin}>
                        <Paper className={classes.paper}>
                            <Grid container justify="flex-start" alignItems="center">
                                <Avatar className={classes.bigAvatar} >
                                    <img src="/assets/baseline-settings_voice-24px.svg" alt="baseline" className={classes.imgres}/>
                                </Avatar>
                                <Typography style={{color:'#ffffff'}}>Student Speaking...</Typography>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
Partfirst.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Partfirst)
