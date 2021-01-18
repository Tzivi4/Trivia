import React, { useContext } from 'react'
import appContext from '../../context/appContext'
import styles from './styles.module.css'
import Link from 'next/link'

const categories = [
  'Entertainment',
  'Sports',
  'Science',
  'Animals',
  'General Knowledge',
  'Mythology',
  'Politics',
  'Geography',
  'History',
]

const Index = () => {
  const { getQuestions } = useContext(appContext)

  const handleCategory = async category => {
    await getQuestions(category)
  }

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {categories.map(category => (
          <Link key={category} href="/game/[category]/[id]" as={`/game/${category.toLowerCase()}/${1}`}>
            <li onClick={() => handleCategory(category)} className={styles.item}>
              {category}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Index
