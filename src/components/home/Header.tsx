
import React from 'react'
import styles from "./Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>설문 사이트 만들기 입니다. (It&apos;s about creating a survey site.)</h1>
      <h2>제발 설문을 모두 진행해주시면 됩니다. </h2>
      <p>2주 전에 같은 설문을 했거나 경험한 적이 있으면 좋습니다만 이건 무슨소리인지 모름으로 무시하셔도 됩니다.</p>
    </header>
  )
}

export default Header