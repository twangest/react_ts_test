import React from 'react';

export type WithLoadingProps = {
    loading?: boolean;
}

const WithLoading = <P extends object>(Component: React.ComponentType<P>): React.FC<P & WithLoadingProps> =>
    ({loading=false, ...props}: WithLoadingProps) => loading
        ? <div>Загружаем данные...</div>
        : <Component {...props as P} />;

export default WithLoading;