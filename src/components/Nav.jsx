import styles from './Nav.module.css';
import Button from './Button.jsx';

const Nav = () => {
    return (
        <div className={styles.container}>
            <div>
                <ul>
                    <a href="/Home"><div className={styles.main}><Button variant='primary'><h6>Face <span>recognition</span> <br></br> <span1>Attendance</span1> <span>Checker</span></h6></Button></div></a>
                    <div className={styles.hover}>
                        <a href="/Us"><Button variant='secondary'>Contact Us</Button></a>
                        <a href="/About"><Button variant='secondary'>About Us</Button></a>
                        <div className={styles.sign}><a href="/Log"><Button variant='secondary'>Login</Button></a></div>
                    </div>
                </ul>
            </div>
        </div>
    );
};

export default Nav;