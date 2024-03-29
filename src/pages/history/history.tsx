import { useCallback, useMemo } from 'react';

import { HistoryRow } from '../../components/history-row/history-row';
import { Loading } from '../../components/loading/loading';
import { useRemoveFromHistoryMutation, useRetrieveHistoryQuery } from '../../providers/store/services/history';

export function History() {
    const { data: history, isSuccess, isLoading } = useRetrieveHistoryQuery();
    const [removeTrigger] = useRemoveFromHistoryMutation();
    const handleDelete = useCallback(
        (name: string, timestamp: number) => {
            removeTrigger({ word: name, timestamp });
        },
        [removeTrigger],
    );
    const elements = useMemo(
        () =>
            history
                ?.map(({ word, timestamp }) => (
                    <HistoryRow key={word + timestamp} name={word} timestamp={timestamp} handleDelete={handleDelete} />
                ))
                .reverse(),
        [handleDelete, history],
    );

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <h2>Search history</h2>
            {!history?.length && isSuccess && <p>Search history is empty</p>}
            {isSuccess && elements}
        </>
    );
}
