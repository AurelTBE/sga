import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Link from "next/link";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons'


const useStyles = makeStyles(theme => ({
  card: {
    [theme.breakpoints.down('sm')]: {
        height: "100%",
      },
  },
  header: {
      color: theme.palette.primary.light,
  },
  cardhead: {
    paddingLeft: theme.spacing(1),
    paddingBottom: 0,
  },
  link: {
    margin: theme.spacing(1),
    marginLeft: 0,
    color: theme.palette.text.primary,
    textDecoration: 'none',
    '&:hover': {
        color: theme.palette.secondary.main,
     },
  },
  linkblock: {
    marginLeft: 4,
    paddingBottom: 2,
    [theme.breakpoints.down('sm')]: {
        paddingBottom: 10,
      },
  },
  linkicon: {
    color: theme.palette.secondary.main,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
}));

export default function CardArchives({articles}) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.card}>
      <Grid container spacing={2}>
        <CardContent>
        {articles.map(article => ( 
            <div key={article.slug} className={classes.linkblock}>
                <Link as={`/actus/${article.slug}`} href="/actus/[id]"><a className={classes.link}><FontAwesomeIcon icon={faArrowCircleRight} className={classes.linkicon} /> {article.title}</a></Link>
            </div>
        ))}
        </CardContent>
      </Grid>
    </Card>
  );
}