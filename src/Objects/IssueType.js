import React from 'react';
import BugReportIcon from '@material-ui/icons/BugReport';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';

export const IssueType = {
  10: {
    name: 'Task',
    icon: <CheckCircleIcon color="primary" />,
  },
  20: {
    name: 'Bug',
    icon: <BugReportIcon style={{ color: 'red' }} />,
  },
  30: {
    name: 'Story',
    icon: <BookmarkIcon style={{ color: 'green' }} />,
  },
};
