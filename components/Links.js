import styles from './Links.module.css'

export default function Links(){
    return(
        <div className={styles.container}>
            <img className={styles.links} src="/resume.png" />
            <img className={styles.links} src="/linkedin.png" />
            <img className={styles.links} src="/github.png" />
            <img className={styles.links} src="/dev.png" />
        </div>
    )
}