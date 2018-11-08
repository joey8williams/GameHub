import Link from 'next/link';
const Nav = (props) => (

    <div className={props.className}>
        <Link href='/'>
        <a>Home</a>
        </Link>
        <Link href='/addStory'>
        <a>Add a story</a>
        </Link>
        <p>MAYBE SOME SETTINGS AND STUFF CAN GO DOWN HERE? CHAT? BUTTONS TO LAUNCH OTHER APPS?</p>

    </div>
)
export default Nav;