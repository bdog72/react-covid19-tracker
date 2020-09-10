//
//
import React from 'react';
import '../styles/InfoBox.css';

import { Card, CardContent, Typography } from '@material-ui/core';

function InfoBox({ title, cases, total }) {
  return (
    <Card className='infoBox'>
      <CardContent>
        <Typography className='infoBox__title' color='textSecondary'>
          {title}
        </Typography>

        <h3 className='infoBox__cases'>Daily Cases - {cases}</h3>

        <Typography className='infoBox__total' color='textSecondary'>
          Total Cases - {total}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
