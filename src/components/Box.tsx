import React from 'react';
import { Card, CardContent } from '@material-ui/core';

const Box: React.FC = ({children}) => {
  return (
    <Card raised style={{marginTop: 20}}>
      <CardContent>
        {children}
      </CardContent>
    </Card>
  );
}

export default Box;
