import React from 'react';
import { Grid, Jumbotron } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default () => (
  <Grid>
    <Jumbotron>
      <h4 className="text-lineHeight-30">
        OMG <br />
        You are in the dark dimension of this web, You need to go back to products page buddy, this place is only for adults
        (｡●́‿●̀｡)
      </h4>
      <Link to="/"> t(ツ)_/¯ Back to products </Link>
    </Jumbotron>
  </Grid>
)