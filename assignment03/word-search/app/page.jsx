'use client';
import { useEffect } from 'react'
import styles from './page.module.css'
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter()
  
  useEffect(()=>{router.push(`/words`)},[])

  return (
    <div className={styles.container}>
    </div>
  )
}
