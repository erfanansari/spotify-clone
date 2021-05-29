import React, {ReactNode} from 'react';
import {createStyles, Theme, makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from "./Header";
import PermanentDrawerLeft from "./PermanentDrawerLeft";
import {Hidden} from "@material-ui/core";

const drawerWidth = 220;

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        // necessary for content to be below app bar
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
        },

    }),
);

interface Props {
    children: ReactNode;
}

const Menu = (props: Props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <Header/>
            <Hidden xsDown>
                <PermanentDrawerLeft/>
            </Hidden>
            <main className={classes.content}>
                <Hidden xsDown>
                    <div className={classes.toolbar}/>
                </Hidden>
                {props.children}
            </main>

        </div>
    );
}
export default Menu