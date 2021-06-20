import React, {useState, useEffect, useRef} from "react";
import {useAppDispatch, useAppSelector} from "../redux/hooks";
import {Grid, Hidden, Box, AppBar, Avatar} from "@material-ui/core";
import {createStyles, Theme, makeStyles} from '@material-ui/core/styles';
import {Link, useLocation, useHistory} from 'react-router-dom'
import SearchBox from "./SearchBox";
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import {drawerWidth} from "../theme";
import Toolbar from "@material-ui/core/Toolbar";
import HomeRounded from "@material-ui/icons/HomeRounded";
import LibraryMusicRounded from "@material-ui/icons/LibraryMusicRounded";
import SearchIcon from "@material-ui/icons/Search";
import PeopleIcon from '@material-ui/icons/People';
import AlbumRounded from "@material-ui/icons/AlbumRounded";
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Cookies from "js-cookie";
import {setToken} from "../redux/Slicers";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        appBar: {
            [theme.breakpoints.up('sm')]: {
                width: `calc(100% - ${drawerWidth}px)`,
                top: 0,
                bottom: 'unset'
            },
            bottom: 0,
            top: 'unset',
            left: 'auto',
            right: 0,
            position: 'fixed',
            marginLeft: drawerWidth,
            backgroundColor: '#000'
        },
        search: {
            position: 'relative',
            borderRadius: '100px',
            backgroundColor: '#fff',
            // marginRight: theme.spacing(6),
            color: '#000',
            // marginLeft: 0,
            width: '20rem',
            margin: '1rem auto 0',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },

        userIcon: {
            [theme.breakpoints.up('md')]: {
                marginRight: '.5rem'
            }
        },
        container: {
            display: 'flex',
            height: '100vh',
            flexDirection: 'column-reverse',
            justifyContent: 'space-between',
        },
        root: {
            display: 'flex',
        },
        paper: {
            marginRight: theme.spacing(2),
        },
    }))

const chooseIcon = (i: number) => {
    if (i === 0)
        return <HomeRounded/>;
    if (i === 1)
        return <SearchIcon/>
    if (i === 2)
        return <LibraryMusicRounded/>
    if (i === 3)
        return <PeopleIcon/>
    if (i === 4)
        return <AlbumRounded/>
}
const Header = () => {
    const classes = useStyles()
    const user = useAppSelector(state => state.data.user)
    const dispatch = useAppDispatch()
    const history = useHistory()
    const location = useLocation()
    // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    // const menuId = 'primary-search-account-menu';
    // console.log(user)
    // const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorEl(event.currentTarget);
    // };

    const [open, setOpen] = useState(false);
    const anchorRef = useRef<HTMLButtonElement>(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event: React.MouseEvent<EventTarget>) => {
        if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
            return;
        }

        setOpen(false);
    };

    function handleListKeyDown(event: React.KeyboardEvent) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = useRef(open);
    useEffect(() => {
        if (prevOpen.current && !open) {
            anchorRef.current!.focus();
        }

        prevOpen.current = open;
    }, [open]);

    const logout = () => {
        Cookies.remove('token')
        dispatch(setToken(null))
    }

    return (
        <AppBar className={classes.appBar}>
            <Toolbar>
                <Hidden xsDown>
                    <Grid container justify="space-between" wrap="nowrap" alignItems="center">
                        <Grid item>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon/>
                                </div>
                                {location.pathname === '/search' ? <SearchBox/> : null}
                            </div>
                        </Grid>
                        <Grid item>
                            <Grid container alignItems="center" style={{marginTop: '1rem'}}>
                                <Avatar src={user && user.images[0].url}
                                        alt={user && user.display_name}
                                        style={{marginRight: '.8rem'}}/>
                                <div className={classes.root}>
                                    <div>
                                        <Button
                                            ref={anchorRef}
                                            style={{color: '#fff', textTransform: 'capitalize'}}
                                            aria-controls={open ? 'menu-list-grow' : undefined}
                                            aria-haspopup="true"
                                            onClick={handleToggle}
                                        >
                                            {user && user.display_name}
                                            {open ? <ExpandLessIcon/> : <ExpandMoreIcon/>}
                                        </Button>
                                        <Popper open={open} anchorEl={anchorRef.current}
                                                role={undefined} transition
                                                disablePortal>
                                            {({TransitionProps, placement}) => (
                                                <Grow
                                                    {...TransitionProps}
                                                    style={{transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom'}}
                                                >
                                                    <Paper style={{backgroundColor: '#282828'}}>
                                                        <ClickAwayListener
                                                            onClickAway={handleClose}>
                                                            <MenuList autoFocusItem={open}
                                                                      id="menu-list-grow"
                                                                      onKeyDown={handleListKeyDown}>
                                                                <MenuItem
                                                                    onClick={(e) => {
                                                                        handleClose(e)
                                                                        history.push('/profile')
                                                                    }}>Profile</MenuItem>
                                                                <MenuItem onClick={handleClose}>My
                                                                    account</MenuItem>
                                                                <MenuItem
                                                                    onClick={(e) => {
                                                                        handleClose(e);
                                                                        logout()
                                                                    }}>Logout</MenuItem>
                                                            </MenuList>
                                                        </ClickAwayListener>
                                                    </Paper>
                                                </Grow>
                                            )}
                                        </Popper>
                                    </div>
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                </Hidden>
                <Hidden smUp>
                    <Grid container justify="space-around" className={classes.container}>
                        <Grid item>
                            <Box display="flex" justifyContent="space-around">
                                {['Home', 'Search', 'Songs', 'Artists', 'Albums'].map((text, index) => (
                                    <IconButton color="inherit" key={text} component={Link}
                                                to={text.toLowerCase()}>
                                        {chooseIcon(index)}
                                    </IconButton>
                                ))}

                            </Box>
                        </Grid>
                        <Grid item>
                            <div className={classes.search}>
                                <div className={classes.searchIcon}>
                                    <SearchIcon/>
                                </div>
                                {location.pathname === '/search' ? <SearchBox/> : null}
                            </div>
                        </Grid>
                    </Grid>
                </Hidden>
            </Toolbar>

        </AppBar>
    )
}
export default Header