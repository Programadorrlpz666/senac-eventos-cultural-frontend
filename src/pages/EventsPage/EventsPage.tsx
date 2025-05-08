import ButtonComponent from '../../components/ButtonComponent/ButtonComponent'
import styles from './EventsPage.module.css'

function EventsPage () {
    return ( 
        <>
            <h1 className={styles.title}> Página De Eventos</h1>
            <ButtonComponent />
        </>
    )
}

export default EventsPage