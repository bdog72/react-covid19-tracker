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
          {title.toUpperCase()}
        </Typography>

        <h2 className='infoBox__cases'>Daily: {cases}</h2>

        <Typography className='infoBox__total' color='textSecondary'>
          Total: {total}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
