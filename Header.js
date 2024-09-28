import './Header.css';
import styles from './Header.module.css';

function Header(){
    const myStyle={
        color:"purple",
        backgroundColor:"yellow",
        padding:"10px",
        fontFamily:"Sans-Serif"
    }

    return <>
        {/*<h1 style={myStyle}>Hello Styling</h1>*/}
        <h1 className={styles.bigblue}>Hello styling</h1>
        <p>Add a little style</p>
        </>
}

export default Header;