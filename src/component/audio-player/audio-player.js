import React, {Component} from 'react'
import './audio-player.css'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import {Typography} from "@material-ui/core";
import Progressbar from "./progress-bar/progress-bar";
import Volume from "./volume/volume";


const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
        width: '100%'
    },
    paddingTop: {
        paddingTop: '2rem'
    },
    margintop: {
        marginTop: theme.spacing.unit * 3,
    },
    marginsocialLR: {
        marginLeft: theme.spacing.unit * 4,
        marginRight: theme.spacing.unit * 4
    },
    colorwhite: {
        color: '#ffffff'
    },
    colr: {
        color: '#39B2C4'
    },
    color: {
        color: '#707070'
    },
    avatar: {
        width: 12,
        height: 'auto',
        padding: 6
    },
    textjoin: {
        textTransform: 'none',
        color: '#6B7678',
        textAlign: 'left',
    },
    paper: {
        color: '#ffffff',
        paddingLeft: theme.spacing.unit * 2,
        paddingRight: theme.spacing.unit * 2,
        paddingTop: theme.spacing.unit * 1,
        paddingBottom: theme.spacing.unit * 1,
        width: '100%',
        borderRadius: 0,
        backgroundColor: '#257CBF',
        boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)'
    },
    bigAvatar: {
        margin: 10,
        width: 70,
        height: 50,
        backgroundColor: 'transparent'
    },
    bigAvatar1: {
        margin: 10,
        width: 30,
        height: 30,
        backgroundColor: 'transparent'
    },
    imgres: {
        width: '100%',
        height: 'auto',
        cursor:'pointer'
    },
    Margin: {
        marginTop: theme.spacing.unit * 5,
    },
    ans: {
        color: '#707070',
        '&$checked': {
            color: '#39B2C4',
        },
    },
    checked: {},
    formControl: {
        marginLeft: theme.spacing.unit * 5,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
        marginLeft: theme.spacing.unit * 5
    },
    scroller: {
        height: '15.2rem',
        overflowY: 'scroll',
        paddingLeft: theme.spacing.unit * 3
    },
    marginTop: {
        marginTop: 10,
        marginBottom:-24,
    },
    paddingleft: {
        paddingLeft: theme.spacing.unit * 2,
    },
    paddingRight: {
        paddingRight: theme.spacing.unit * 2
    },
    margin24:{
        marginTop:theme.spacing.unit * 2
    }
});

class Audioplayer extends Component {
    constructor(props) {
        super(props);
        this.audioRef = React.createRef();
        this.state = {
            playerState: 'pause',
            currentTime: 0,
            totalTime: 0,
            volume: 0,
            muted: true
        }
    }

    handlePause = () => {
        this.audioRef.current.pause();
        this.audioRef.current.currentTime = this.state.currentTime;
        this.setState({playerState: 'pause',});
    };
    handlePlay = () => {
        this.audioRef.current.play();
        this.audioRef.current.currentTime = this.state.currentTime;
        this.setState({playerState: 'play'});
    };
    handleAudioPlay = () => {
        this.setState({
            currentTime: this.getCurrentTime()
        });
    };
    handleSeek = (type, seconds) => {
        if (this.audioRef.current) {
            if (type === 'forward') {
                this.audioRef.current.currentTime = this.audioRef.current.currentTime + seconds;
            } else if (type === 'backward') {
                this.audioRef.current.currentTime = this.audioRef.current.currentTime - seconds;
            }
        }
    };
    convertTime = (value) => {
        if (value > 3600) {
            const hours = Math.floor(value / 3600);
            const minutes = Math.floor((value - (hours * 3600)) / 60);
            const seconds = value - (hours * 3600) - (minutes * 60);
            return Math.floor(hours) < 10 ? '0' + Math.floor(hours) + ':' + (Math.floor(minutes) < 10 ? '0' + Math.floor(minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds) : Math.floor(minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds)) : Math.floor(hours) + ':' + (Math.floor(minutes) < 10 ? '0' + Math.floor(minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds) : Math.floor(minutes) + ':' + (seconds < 10 ? '0' + seconds : seconds));
        } else {
            const minutes = Math.floor(value / 60);
            return Math.floor(minutes) < 10 ? '0' + Math.floor(minutes) + ':' + (Math.floor(value - minutes * 60) < 10 ? '0' + Math.floor(value - minutes * 60) : Math.floor(value - minutes * 60)) : Math.floor(minutes) + ':' + (Math.floor(value - minutes * 60) < 10 ? '0' + Math.floor(value - minutes * 60) : Math.floor(value - minutes * 60));
        }
    };
    handleVolume = () => {
        if (this.audioRef.current) {
            if (this.audioRef.current.muted) {
                this.setState({volume: 0, muted: this.audioRef.current.muted});
            } else {
                this.setState({volume: this.audioRef.current.volume, muted: this.audioRef.current.muted});
            }
        }
    };
    getCurrentTime = () => {
        if (this.audioRef.current) {
            return this.audioRef.current.currentTime;
        }
    };
    getTotalTime = () => {
        if (this.audioRef.current) {
            this.setState({totalTime: this.audioRef.current.duration});
        }
    };
    timeUpdateOnSeek = (time) => {
        this.audioRef.current.currentTime = time;
        this.setState({currentTime: time})
    };

    render() {
        const {classes} = this.props;
        const {source} = this.props;
        const {playerState, currentTime, totalTime, volume, muted} = this.state;
        return (
            <div className='audio-player' style={{width: '100%'}}>
                <Grid container direction='row' justify='flex-start' alignItems='flex-end' item xs={12} sm={12} md={12}
                      lg={12} xl={12} className={classes.Margin}>
                    <Paper className={classes.paper}>
                        <audio ref={this.audioRef} controls onCanPlay={this.getTotalTime} onTimeUpdate={this.handleAudioPlay} onVolumeChange={this.handleVolume} muted={muted}>
                            <source src={source} type="audio/ogg"/>
                            <source src={source} type="audio/mpeg"/>
                            Your browser does not support the audio element
                        </audio>
                        <Grid container item lg={12} xl={12} sm={12} md={12} xs={12} className={classes.margin24}>
                            <Progressbar currentTime={currentTime} totalTime={totalTime} timeUpdateOnSeek={this.timeUpdateOnSeek}/>
                        </Grid>
                        <Grid container direction='row' justify='center' alignItems='center' item xs={12} sm={12}
                              md={12} lg={12} xl={12} className={classes.marginTop}>
                            <Grid container direction='row' justify='flex-start' alignItems='center' item xs={6} sm={6}
                                  md={6} lg={6} xl={6}>
                                <Typography
                                    className={`${classes.colorwhite} ${classes.paddingleft}`}>{this.convertTime(currentTime)}
                                </Typography>
                            </Grid>
                            <Grid container direction='row' justify='flex-end' alignItems='center' item xs={6} sm={6}
                                  md={6} lg={6} xl={6}>
                                <Typography
                                    className={`${classes.colorwhite} ${classes.paddingRight}`}>{this.convertTime(totalTime)}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Grid container justify="center" alignItems="center" direction="row" item xl={12} md={12} sm={12} lg={12} xs={12}>
                            <Grid container justify="flex-end" alignItems="center" direction="row" item xl={7} md={7} sm={8} lg={7} xs={6}>
                                <Avatar className={classes.bigAvatar1}>
                                <img src="/assets/backword.svg" onClick={() => this.handleSeek('backward', 5)}
                                     alt="baseline" className={classes.imgres}/>
                            </Avatar>
                                <Avatar className={classes.bigAvatar}>
                                    {playerState === 'play' ?
                                        <img src="/assets/pauseuser.svg" onClick={this.handlePause} alt="baseline"
                                             className={classes.imgres}/>
                                        : playerState === 'pause' ?
                                            <img src="/assets/play.svg" onClick={this.handlePlay} alt="baseline"
                                                 className={classes.imgres}/> : ''}
                                </Avatar>
                                <Avatar className={classes.bigAvatar1}>
                                    <img src="/assets/forword.svg" onClick={() => this.handleSeek('forward', 5)}
                                         alt="baseline" className={classes.imgres}/>
                                </Avatar>
                            </Grid>
                            <Grid container justify="flex-end" alignItems="center" direction="row" item xl={5} md={5} sm={4} lg={5} xs={6}>
                                <Volume progress={volume * 100} muteState={muted}/>
                            </Grid>

                        </Grid>
                    </Paper>
                </Grid>
            </div>
        )
    }
}

Audioplayer.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Audioplayer)
