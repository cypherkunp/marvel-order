import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';

import Header from './header/header.comp';
import MovieTimeline from './movie-timeline/movie-timeline.comp';

import theme from '../styles/theme';

const viewType = {
  MOVIES: 'movies',
  TIMELINE: 'timeline',
};

function App() {
  const [view, setView] = useState(viewType.MOVIES);

  return (
    <ThemeProvider theme={theme}>
      <Header setView={setView} />
      <main>
        <Grid container direction="row" justify="center" alignItems="center">
          <Grid item xs={8}>
            {view === viewType.TIMELINE && <MovieTimeline />}
          </Grid>
        </Grid>
      </main>
    </ThemeProvider>
  );
}

export default App;
