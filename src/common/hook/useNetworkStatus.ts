import { useEffect, useState } from 'react';

import NetInfo, { NetInfoState } from '@react-native-community/netinfo';

type NetInfoTuple = [boolean, boolean];

export const useNetWorkStatus = (): NetInfoTuple => {
  const [status, setStatus] = useState<boolean>(false);
  const [canAccess, setCanAccess] = useState<boolean>(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state: NetInfoState) => {
      setStatus(state.isConnected ?? false);
      setCanAccess(state.isInternetReachable ?? false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return [status, canAccess];
};
