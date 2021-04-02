import React, { useState, useEffect } from 'react';
import Timeline from '@material-ui/lab/Timeline';

import marvelData from '../../data/marvel-order';
import MovieTimelineItem from '../movie-timeline-item/movie-timeline-item.comp';

export default function MovieTimeline() {
  const [phasesData, setPhasesData] = useState([]);

  useEffect(() => {
    setPhasesData(marvelData.phases);
  }, []);

  return (
    <Timeline align="alternate">
      {phasesData.length
        ? phasesData.map(phaseData => (
            <>
              <MovieTimelineItem key={phaseData.key} movieData={phaseData} />
              {phaseData.movies.length &&
                phaseData.movies.map(movie => (
                  <MovieTimelineItem key={phaseData.key + movie.key} movieData={movie} />
                ))}
            </>
          ))
        : null}
    </Timeline>
  );
}
