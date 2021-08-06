import styles from '../../styles/Jobs.module.css'
import Link from 'next/link'
export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
  
    return {
      props: { friends: data }
    }
  }

const Shahadats = ({friends}) => {
    console.log(friends)
    return ( 
        <div>
            <h1>All About Friends</h1>
            {friends.map(friend => (
            <Link href={'/shahadat/' + friend.id} key={friend.id}>
              <a className={styles.single}>
            <h3>{ friend.name }</h3>
          </a>
        </Link>
      ))}
        </div>
     );
}
 
export default Shahadats;