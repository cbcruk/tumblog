import styles from './style.module.css'

function Texts({ texts }) {
  return (
    <div className={styles.wrapper}>
      {texts.map(({ text }, index) => (
        <p key={index}>{text}</p>
      ))}
    </div>
  )
}

export default Texts
