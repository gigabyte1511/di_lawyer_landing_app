import styles from './styles.module.css'

interface Props {
    image: string
    text: JSX.Element
    header: string
}
export default function CarouselSlide({ image, text, header }: Props): JSX.Element {
    return (
        <div className={styles.slide}>
            <div className={styles.imageContainer} >
                <img className={styles.img} src={image} />
                <div className={styles.slideHeader}>
                    <h3>{header}</h3>
                </div>
            </div>
            <div className={styles.textArea}>
                {text}
            </div>
        </div>
    )
}
