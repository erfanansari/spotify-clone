import {createMuiTheme} from "@material-ui/core/styles";

const Blue = "#0B72B9";
const Orange = "#FFBA60";
const Gray = "#868686";
// const darkGray = "#555";
const fontFamily = 'Apercu'
export default createMuiTheme({
    palette: {
        primary: {
            main: Blue
        },
        secondary: {
            main: Orange
        }
    },
    typography: {

        fontFamily,
        // estimate: {
        //   fontFamily: "Pacifico",
        //   fontSize: "1rem",
        //   textTransform: "none",
        //   color: "white"
        // },
        h2: {
            fontWeight: 700,
            fontSize: "2.5rem",
            color: Blue,
            lineHeight: 1.5
        },
        h3: {
            fontSize: "2.5rem",
            color: Blue
        },
        h4: {
            fontSize: "1.75rem",
            color: Blue,
            fontWeight: 700
        },
        h6: {
            fontSize: '.9rem',
            fontWeight: 500,
        },
        subtitle1: {
            fontSize: "1.25rem",
            fontWeight: 300,
            color: Gray
        },
        subtitle2: {
            color: "white",
            fontWeight: 300,
            fontSize: "1.25rem"
        },
        body1: {
            fontSize: '1.1rem',
            color: Gray,
            fontWeight: 300
        },
        caption: {
            fontSize: "1rem",
            fontWeight: 300,
            color: Gray
        },
    },
    overrides: {
        // MuiInputLabel: {
        //     root: {
        //         color: Blue,
        //         fontSize: "1rem"
        //     }
        // },
        // MuiInput: {
        //     root: {
        //         color: Gray,
        //         fontWeight: 300
        //     },
        //     underline: {
        //         "&:before": {
        //             borderBottom: `2px solid ${Blue}`
        //         },
        //         "&:hover:not($disabled):not($focused):not($error):before": {
        //             borderBottom: `2px solid ${Blue}`
        //         }
        //     }
        // },
        MuiListItemIcon: {
            root: {
                minWidth: '40px'
            }
        }
    },
    props: {
        // MuiButton: {
        // disableRipple: true
        // }
    }
});
