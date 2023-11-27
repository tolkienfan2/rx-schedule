import Image from 'next/image'
import styles from './page.module.css'
import Calendar from './components/Calendar'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          RX-Tools:&nbsp;
          <code className={styles.code}>RX-Scheduler</code>
        </p>
        <div> 
            <Image
              src="/CreativeIceLogo.jpg"
              alt="CreativeIce Logo"
              width={200}
              height={48}
              style={{ borderRadius: '10px' }}
              priority
            />
        </div>
      </div>

      <div className={styles.center}>
        <Calendar />
      </div>
    </main>
  )
}
