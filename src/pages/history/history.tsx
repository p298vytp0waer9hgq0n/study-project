import { HistoryRow } from '../../components/history-row/history-row';
import { useRetrieveHistoryQuery } from '../../providers/store/services/history';

export function History() {
    const { data: history, isSuccess } = useRetrieveHistoryQuery();
    const elements = history
        ?.map(({ word, timestamp }) => <HistoryRow key={word + timestamp} name={word} timestamp={timestamp} />)
        .reverse();

    return <section>{isSuccess && elements}</section>;
}
