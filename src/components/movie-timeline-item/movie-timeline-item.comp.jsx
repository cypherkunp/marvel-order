import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineIcon from '@material-ui/icons/Timeline';
import LiveTvIcon from '@material-ui/icons/LiveTvOutlined';
import MovieIcon from '@material-ui/icons/MovieOutlined';

import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  paperPhase: {
    padding: '6px 16px',
    backgroundColor: theme.palette.primary.main,
    display: 'inline-block',
  },
  paperMovie: {
    padding: '6px 16px',
    backgroundColor: theme.palette.common.mBlue,
    display: 'inline-block',
  },
  paperTv: {
    padding: '6px 16px',
    backgroundColor: theme.palette.common.mDarkGrey,
    display: 'inline-block',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  typography: {
    phase: {
      maxWidth: '5em',
    },
  },
}));

export default function MovieTimelineItem(props) {
  const { name, year, type } = props.movieData;
  const classes = useStyles();

  const [icon, setIcon] = useState(null);
  const [paperStype, setPaperStyle] = useState(null);

  useEffect(() => {
    switch (type) {
      case 'tv':
        setPaperStyle(classes.paperTv);
        setIcon(<LiveTvIcon />);
        break;
      case 'movie':
        setPaperStyle(classes.paperMovie);
        setIcon(<MovieIcon />);
        break;
      default:
        setPaperStyle(classes.paperPhase);
        setIcon(<TimelineIcon />);
        break;
    }
  }, []);

  return (
    <TimelineItem>
      <TimelineOppositeContent>
        <Typography variant="body1">{year}</Typography>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot color="primary">{icon}</TimelineDot>
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} className={paperStype} variant="outlined">
          <Typography variant="h4" component="h1" className={classes.typography.phase}>
            {name}
          </Typography>
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
}
