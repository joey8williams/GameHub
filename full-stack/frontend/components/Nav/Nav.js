import Link from 'next/link';
import User from '../User/User';
const Nav = (props) => (
    <div className={props.className}>
        <User>
        {({data: {me}}) => {
            if(me) return <p>me.name</p>
            return null;
        }}
        </User>
        <Link href='/'>
        <a>Home</a>
        </Link>
        <Link href='/signup'>
        <a>Sign up</a>
        </Link>
        <p>MAYBE SOME SETTINGS AND STUFF CAN GO DOWN HERE? CHAT? BUTTONS TO LAUNCH OTHER APPS?</p>
    </div>
)
export default Nav;
//        <Link href='/addStory'>
//        <a>Add a story</a>
//        </Link>
