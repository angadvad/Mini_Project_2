import { Grid, Button } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import DirectionsCarFilledIcon from '@mui/icons-material/DirectionsCarFilled';

const Navbar = (props) => {

    const navigate = useNavigate();
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return (
            <Grid container className='bg-gray-800'>
                <Grid item xs>
                    <Button sx={{ color: 'teal' }} onClick={() => navigate("/home")}><DirectionsCarFilledIcon></DirectionsCarFilledIcon></Button>
                </Grid>
                <Grid item xs>
                    <Button onClick={() => navigate("/dashboard")}>Dashboard</Button>
                </Grid>
                <Grid item xs>
                    <Button onClick={() => navigate("/parkinglist")}>Park List</Button>
                </Grid>
            </Grid>)
    } else {
        return (
            <Grid container className='bg-gray-800'>
                <Grid item xs>
                    <Button sx={{ color: 'teal' }} onClick={() => navigate("/home")}><DirectionsCarFilledIcon></DirectionsCarFilledIcon></Button>
                </Grid>
                <Grid item xs>
                    <Button onClick={() => navigate("/signup")}>Sign Up</Button>
                </Grid>      
                <Grid item xs>
                    <Button onClick={() => navigate("/login")}>Login</Button>
                </Grid>                            
            </Grid>)
    }

}

export default Navbar;

/*

function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
// Try changing to isLoggedIn={true}:
root.render(<Greeting isLoggedIn={false} />);

*/