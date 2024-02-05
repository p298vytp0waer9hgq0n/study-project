import { HistoryRow } from '../../components/history-row/history-row';
import { useRetrieveHistoryQuery } from '../../providers/store/services/history';

export function History() {
    const { data: history, isSuccess } = useRetrieveHistoryQuery();
    const elements = history
        ?.map(({ name, link, timestamp }) => (
            <HistoryRow key={name + timestamp} name={name} link={link} timestamp={timestamp} />
        ))
        .reverse();

    return <section>{isSuccess && elements}</section>;
}
