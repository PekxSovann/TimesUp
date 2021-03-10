import { useState } from 'react';

export interface useLoadingProps {
}

const useLoading = (): { loading: boolean, setLoading: React.Dispatch<React.SetStateAction<boolean>> } => {
  const [loading, setLoading] = useState(false);

  if (loading)
    setTimeout(() => setLoading(false), 1000);

  return { loading, setLoading };
}

export default useLoading