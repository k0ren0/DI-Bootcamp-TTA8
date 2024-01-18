// import { userStule, userStyle } from "./styling"; //first
import "./User.css"
import { Button } from 'react-bootstrap';

const User = (props) => {
    const { name, email, id, username } = props.userinfo;
    return (
        <div 
            className="userstyle"
            // style={userStyle} //first
        >
        

        <img src={`https://robohash.org/${id}?size=150x150`} alt=""/>
        <h2>{name}</h2>
        <h3>{email}</h3>
        <h4>{username}</h4>
        <Button variant="primary">Primary Button</Button>
        </div>
    );
};

export default User;