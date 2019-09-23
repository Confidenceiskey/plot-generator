import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { CardMedia } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import close from '../../assets/close.svg';

const styles = theme => ({
  root: {
    margin: '0 50px 0 0',
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DeleteIcon = withStyles({
  root: {
    background: '#9e9e9e',
    height: '16px',
    width: '16px',
    cursor: 'pointer',
    mask: `url(${close})`,

    '&:hover': {
      background: '#1c1b1b'
    }
  }
})(props => <CardMedia {...props} />);

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
          <DeleteIcon src={close} />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles({
  root: {
    padding: '20px'
  }
})(MuiDialogContent);

const Modal = ({ closeModal, openModal, plotStory }) => {
  const plotList = plotStory.resources;
  const plotStars = plotStory.resources.map((star, i) => {
    if (plotList.length === 1) {
      return star.name;
    } else {
      return plotList.length - 1 !== i ? `${star.name}, ` : `& ${star.name}`;
    }
  });
  return (
    <div>
      <Dialog onClose={closeModal} aria-labelledby="customized-dialog-title" open={openModal}>
        <DialogTitle id="customized-dialog-title" onClose={closeModal}>
          {plotStory.title}
        </DialogTitle>
        <DialogContent dividers>
          <Typography>
            {plotStory.description}
          </Typography>
        </DialogContent>
        <DialogContent>
          <Typography variant='subtitle2'>
            Featuring: {plotStars}
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default Modal;