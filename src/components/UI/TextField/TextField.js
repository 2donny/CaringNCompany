import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import './TextField.css';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  input: {
    borderColor: 'lightsalmon'
  }
}));

export default function BasicTextFields({ type, label, variant, onChange }) {
  const classes = useStyles();

  return (
    <form onSubmit={event => event.preventDefault()} className={classes.root} noValidate autoComplete="off">
      <TextField type={type} onChange={onChange} color='primary' style={{fontSize: '22px', fontWeight: '600'}} id={`${variant}-basic`} label={label} variant={variant} />
    </form>
  );
}