'use client';
import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { connect } from "react-redux";
import {ACTION_TYPES, NOTIFICATION_TYPES} from "@/utils/enums";
import store from "../../redux/store";
import {useAppDispatch, useAppSelector} from "@/redux/hooks";
import {showHide} from "@/redux/notification";
import {Alert} from "@mui/material";

function SimpleSnackbar() {

    const notification = useAppSelector(state => state.notifications.notification);

    const dispatch = useAppDispatch();
    const handleClose = ()=>{
        dispatch(showHide({
            type:NOTIFICATION_TYPES.DEFAULT,
            message:'',
            show:false
        }))
    }

  const action = (
    <React.Fragment>
      <IconButton
        size='small'
        aria-label='close'
        color='inherit'
        onClick={handleClose}
      >
        <CloseIcon fontSize='small' />
      </IconButton>
    </React.Fragment>
  );

  return (
    <div>
        {
            notification.type === NOTIFICATION_TYPES.DEFAULT ? <></> :
                <Snackbar
                    anchorOrigin={{ vertical:'top', horizontal:'center' }}
                    className=' absolute'
                    open={notification.show}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    action={action}
                >
                    {
                        notification.type === NOTIFICATION_TYPES.SUCCESS?( <Alert
                                onClose={handleClose}
                                severity="success"
                                variant="filled"
                                sx={{ width: '100%' }}
                            >
                                {notification.message}
                            </Alert>):
                            (notification.type === NOTIFICATION_TYPES.ERROR? ( <Alert
                                onClose={handleClose}
                                severity="error"
                                variant="filled"
                                sx={{ width: '100%' }}
                            >
                                {notification.message}
                            </Alert>):(
                                notification.type === NOTIFICATION_TYPES.WARNING? (
                                    <Alert
                                        onClose={handleClose}
                                        severity="warning"
                                        variant="filled"
                                        sx={{ width: '100%' }}
                                    >
                                        {notification.message}
                                    </Alert>
                                ) : (notification.type === NOTIFICATION_TYPES.INFO? ( <Alert
                                    onClose={handleClose}
                                    severity="info"
                                    variant="outlined"
                                    sx={{ width: '100%' }}
                                >
                                    {notification.message}
                                </Alert>) : (
                                    <Alert
                                        onClose={handleClose}
                                        severity="warning"
                                        variant="filled"
                                        sx={{ width: '100%' }}
                                    >
                                        {'Something went wrong'}
                                    </Alert>
                                ))
                            ))
                    }
                </Snackbar>
        }
    </div>
  );
}

//
// const mapStateToProps = (state: any) => {
//     return {
//         open: state.snackBar.snackBar.open,
//         message: state.snackBar.snackBar.message,
//     };
// }
//
// const dispatchToProps = (dispatch: any) => ({
//     openSnackBar : () => dispatch({type: ACTION_TYPES.SNACK_BAR_OPEN, payload:{description: 'it works', extra:{}}}),
//     handleClose  : () => dispatch({type: ACTION_TYPES.SNACK_BAR_CLOSE, payload:{description: null, extra:{}}})
// })

// export default connect(mapStateToProps,dispatchToProps)(SimpleSnackbar);

export default SimpleSnackbar;