import {createMuiTheme} from "@material-ui/core/styles";
export const drawerWidth = 220;
const Blue = "#0B72B9";
const Orange = "#FFBA60";
const Gray = "#868686";
// const Black= "#000";
// const White= "#fff";
// const darkGray = "#555";
const fontFamily = 'Apercu'
// @ts-ignore
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
            color:'#999',
            fontWeight: 500,
        },
        // subtitle1: {
        //     fontsize: "1.25rem",
        //     fontweight: 300,
        //     color: gray
        // },
        // subtitle2: {
        //     color: "white",
        //     fontweight: 300,
        //     fontsize: "1.25rem"
        // },
        body1: {
            fontSize: '1.1rem',
            color: '#fff',
            fontWeight: 300
        },
        caption: {
            fontSize: "1rem",
            fontWeight: 300,
            color: Gray
        },
    },
    overrides: {
        MuiListItemIcon: {
            root: {
                minWidth: '40px'
            }
        }
    },
    props: {
    }
});
