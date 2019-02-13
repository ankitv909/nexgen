import React, {Component} from 'react'
import './progress-bar.css'
import PropTypes from 'prop-types'
import {withStyles} from '@material-ui/core/styles'
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
    progress: {
        width: '100%',
        height: '10px',
        backgroundColor: '#ffffff',
    },
    innerprogress: {
        position: 'relative',
        width: '100%',
        height: '10px',
        backgroundColor: '#F8A662',
        transition: '100ms linear'
    },
    circle: {
        position: 'absolute',
        borderRadius: 50,
        height: 26,
        right: -25,
        top: -8,
        width: 26,
        backgroundColor: '#F8A662',
        boxShadow: '0px 0px 0px 1px #827d7d6b'
    }
});

class Progressbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            width: 0,
            time: 0
        };
        this.innerProgress = React.createRef();
        this.outerProgress = React.createRef();
    };

    calculatePercentage = (currentTime, totalTime) => {
        return (currentTime / totalTime) * 100;
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

    getCurrentTime = (event, type) => {
        const {totalTime} = this.props;
        const offset = this.innerProgress.current.getBoundingClientRect();
        const left = (event.pageX - offset.left);
        const totalWidth = this.outerProgress.current.scrollWidth;
        const percentage = (left / totalWidth);
        if (type === 'click' || type === 'move') {
            this.setState({time: totalTime * percentage});
            this.props.timeUpdateOnSeek(totalTime * percentage);
        }
    };

    render() {
        const {classes, totalTime} = this.props;
        let {currentTime} = this.props;
        const {time} = this.state;
        currentTime = time ? time : currentTime;
        return (
            <div className='progress-bar' style={{width: '100%'}}>
                <Tooltip title={this.convertTime(time)} placement="bottom">
                    <div className={classes.progress} ref={this.outerProgress}
                         onClick={(e) => this.getCurrentTime(e, 'click')}
                         onMouseMove={(e) => this.getCurrentTime(e, 'tooltip')}>
                        <div className={classes.innerprogress}
                             style={{width: this.calculatePercentage(currentTime, totalTime) + '%'}}
                             ref={this.innerProgress}>
                            <div className={classes.circle} onDragEnd={(e) => this.getCurrentTime(e, 'move')}></div>
                        </div>
                    </div>
                </Tooltip>
            </div>
        )
    }
}

Progressbar.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Progressbar)
