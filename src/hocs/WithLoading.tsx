import React from 'react';

export type WithLoadingProps = {
  loading?: boolean;
};

const WithLoading = <P extends Record<string, unknown>>(
  Component: React.ComponentType<P>
  // eslint-disable-next-line react/display-name
): React.FC<P & WithLoadingProps> => ({ loading = false, ...props }: WithLoadingProps) => {
  return loading ? <div>Загружаем данные...</div> : <Component {...(props as P)} />;
};

export default WithLoading;
