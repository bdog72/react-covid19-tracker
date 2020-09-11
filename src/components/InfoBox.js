//
//
import React from 'react';
import '../styles/InfoBox.css';

import { Card, CardContent, Typography } from '@material-ui/core';

function InfoBox({ title, cases, isRed, active, total, ...props }) {
  return (
    <Card
      onClick={props.onClick}
      className={`infoBox ${active && 'infoBox--selected'} ${
        isRed && 'infoBox--red'
      }`}
    >
      <CardContent>
        <h2>Daily</h2>
        <Typography className='infoBox__title' color='textSecondary'>
          {title}
        </Typography>

        <h3 className={`infoBox__cases ${!isRed && 'infoBox__cases--green'}`}>
          {cases}
        </h3>

        <Typography className='infoBox__total' color='textSecondary'>
          Total Cases {total}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
