import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
  <>
    <Head>
      <title>Shahadat | Home</title>
      <meta name="keywords" content="Shahadat"></meta>
    </Head>
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>
        Argentina striker Lionel Messi will leave Barcelona despite both parties having reached an agreement over a new contract, the La Liga club said on Thursday, citing economic and structural obstacles to the renewal of deal.  "Despite FC Barcelona and Lionel Messi having reached an agreement and the clear intention of both parties to sign a new contract today, this cannot happen because of financial and structural obstacles (Spanish La Liga regulations)," Barca said in a statement.
      </p>
      <p className={styles.text}>
        rgentina striker Lionel Messi will leave Barcelona despite both parties having reached an agreement over a new contract, the La Liga club said on Thursday, citing economic and structural obstacles to the renewal of deal.  "Despite FC Barcelona and Lionel Messi having reached an agreement and the clear intention of both parties to sign a new contract today, this cannot happen because of financial and structural obstacles (Spanish La Liga regulations)," Barca said in a statement.
      </p>
      <Link href="/shahadat">
        <a className={styles.btn}>
          See Shahadat's Profile
        </a>
      </Link>
    </div>
  </>
  )
}
