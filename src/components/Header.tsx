import React from "react";
import {useAppSelector} from "../redux/hooks";
import {Grid, Hidden, Box, AppBar, Avatar, Typography} from "@material-ui/core";
import {createStyles, Theme, makeStyles} from '@material-ui/core/styles';
import {Link, useLocation} from 'react-router-dom'
import SearchBox from "./SearchBox";
import {drawerWidth} from "../theme";
import Toolbar from "@material-ui/core/Toolbar";
import HomeRounded from "@material-ui/icons/HomeRounded";
import LibraryMusicRounded from "@material-ui/icons/LibraryMusicRounded";
import SearchIcon from "@material-ui/icons/Search";
import PeopleIcon from '@material-ui/icons/People';
import AlbumRounded from "@material-ui/icons/AlbumRounded";
import IconButton from '@material-ui/core/IconButton';


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
            margin:'1rem auto 0',
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
        }
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
    const location = useLocation()
    // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    // const menuId = 'primary-search-account-menu';
    // console.log(user)
    // const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    //     setAnchorEl(event.currentTarget);
    // };

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
                            <Grid container alignItems="center" style={{marginRight: '1rem'}}>
                                <Avatar src={user && user.images[0].url}
                                        alt={user && user.display_name}
                                        style={{marginRight: '.8rem'}}/>
                                <Typography
                                    variant="subtitle2">{user && user.display_name}</Typography>
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