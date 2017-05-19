import React from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default () => (
  <Grid>
    <Jumbotron>
      <h1>Sorry, this page not exists :'( </h1>
      <Link to="/"> Back to products </Link>
    </Jumbotron>
  </Grid>
)