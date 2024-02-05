import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';

export const historyApi = createApi({
    reducerPath: 'history',
    baseQuery: fakeBaseQuery(),
    endpoints: () => ({}),
    tagTypes: ['history'],
});
