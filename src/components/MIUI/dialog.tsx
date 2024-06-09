"use client";
import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function FullScreenDialog({
  title,
  child,
  onSubmit,
}: {
  title: string;
  child: React.ReactNode;
  onSubmit: () => any;
}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    onSubmit();
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button
        className='bg-blue-600'
        variant='contained'
        onClick={handleClickOpen}
      >
        {title}
      </Button>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar className='bg-white text-black' sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge='start'
              color='inherit'
              onClick={handleClose}
              aria-label='close'
              className=' text-blue-600'
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant='h6' component='div'>
              {title}
            </Typography>
            <Button
              className=' text-blue-600'
              autoFocus
              color='inherit'
              onClick={handleClose}
            >
              save
            </Button>
          </Toolbar>
        </AppBar>
        {child}
      </Dialog>
    </React.Fragment>
  );
}
