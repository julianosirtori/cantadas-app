import styles from './Background.module.scss'

type BackgroundProps = {
  children: any
}


const Background = ({children}: BackgroundProps): JSX.Element => {
  return <div className={styles.background}>
    {children}
  </div>;
}

export default Background;