import React from 'react';
import { Height } from '@material-ui/icons';
import { ArrowDownwardRounded, ArrowUpwardRounded } from '@material-ui/icons';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import HeightIcon from '@material-ui/icons/Height';

export const Priority = {
  10: {
    icon: <ArrowUpwardRounded style={{ color: 'red' }} />,
    name: 'Highest',
  },
  20: {
    icon: <ArrowUpwardRounded style={{ color: 'orange' }} />,
    name: 'High',
  },
  30: {
    icon: <HeightIcon style={{ color: 'yellow' }} />,
    name: 'Medium',
  },
  40: {
    icon: <ArrowDownwardIcon style={{ color: 'darkgreen' }} />,
    name: 'Low',
  },
  50: {
    icon: <ArrowDownwardIcon style={{ color: 'green' }} />,
    name: 'Lowest',
  },
};
