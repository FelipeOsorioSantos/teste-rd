import React, { useEffect, useState } from 'react';

export const useClientSidePersist = (data: any) => {
  const [clientData, setClientData] = useState();
  useEffect(() => {
    setClientData(data);
  }, [data]);
  return clientData as typeof data;
};
