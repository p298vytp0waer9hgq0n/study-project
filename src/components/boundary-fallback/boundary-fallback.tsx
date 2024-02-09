import { FallbackProps } from 'react-error-boundary';

export function BoundaryFallback({ error, resetErrorBoundary }: FallbackProps) {
    return (
        <>
            <h2>There&apos;s an error going on:</h2>
            <pre>{error.stack}</pre>
            <button type="button" onClick={resetErrorBoundary}>
                Try again
            </button>
        </>
    );
}
