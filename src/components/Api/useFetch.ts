import { useEffect, useState } from "react";
import { ResponseApi } from "./types";

export const useFetch = (url: string) => {
  const [dataUsa, setDataUsa] = useState<any | undefined>(undefined);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((d: any) => setDataUsa(d));
  }, [url]);

  return [dataUsa];
};
