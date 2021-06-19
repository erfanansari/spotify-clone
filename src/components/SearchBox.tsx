import React from 'react';
import {InputBase} from "@material-ui/core";
import {useAppSelector, useAppDispatch} from "../redux/hooks";
import {setSearchTerm} from "../redux/Slicers";
import {createStyles, Theme, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => createStyles({
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
}))

const SearchBox = () => {
    const classes = useStyles()
    const searchTerm = useAppSelector(state => state.data.searchTerm)
    const dispatch = useAppDispatch()

    return (
        <InputBase
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            placeholder="Search…"
            classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
            }}
            inputProps={{'aria-label': 'search'}}
        />
    );
};

export default SearchBox;