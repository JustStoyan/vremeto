import { HighlightCard } from './HighlightCard';
import { SunRiseAndSet } from './SunRiseAndSet';
import { WindStatus } from './WindStatus';

import styles from './DetailedView.module.css';
import { Humidity } from './Humidity';
import { Header } from './Header';
import { Visibility } from './Visibility';
import { Forcast } from '../Forcast';
export const DetailedView = () => {
    return (
        <div className={styles['flex-wrapper']}>
            <Header />
            <Forcast />
            <h2>Detailed View</h2>
            <div className={styles['grid-wrapper']}>
                <HighlightCard title="Wind Status" component={<WindStatus />} />
                <HighlightCard
                    title="Sunrise & Sunset"
                    component={<SunRiseAndSet />}
                />
                <HighlightCard title="Humidity" component={<Humidity />} />
                <HighlightCard title="Visibility" component={<Visibility />} />
            </div>
        </div>
    );
};
