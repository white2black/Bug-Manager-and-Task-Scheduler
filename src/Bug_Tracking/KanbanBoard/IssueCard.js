import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Priority } from '../../Objects/Priority';
import { IssueType } from '../../Objects/IssueType';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import BugReportIcon from '@material-ui/icons/BugReport';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import HeightIcon from '@material-ui/icons/Height';
import { Height } from '@material-ui/icons';
import { ArrowDownwardRounded, ArrowUpwardRounded } from '@material-ui/icons';
import parse from 'html-react-parser';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function IssueCard({ content }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  //   console.log('IssueCard', task);

  let PriorityNumber = content.priority || 10;
  //console.log('IssueCard priority', Priority[PriorityNumber].name);
  let IssueNumber = content.issueType || 10;
  //   const parse = require('html-react-parser');

  let description = content.description || '<h3>Default Description</h3>';

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <Tooltip title={`Priority: ${Priority[PriorityNumber].name}`}>
            <span>
              <IconButton aria-label="settings" disabled>
                {Priority[PriorityNumber].icon}
              </IconButton>
            </span>
          </Tooltip>
        }
        title={content.shortSummary}
        subheader="Date"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {parse(description)}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Tooltip title={IssueType[IssueNumber].name}>
          <span>
            <IconButton aria-label="add to favorites" disabled>
              {IssueType[IssueNumber].icon}
            </IconButton>
          </span>
        </Tooltip>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>More Info:</Typography>
          <Typography paragraph></Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
