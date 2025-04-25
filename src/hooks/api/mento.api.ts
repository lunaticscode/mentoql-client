import { useState } from "react";
import { api } from "../../utils/api";
import { HttpStatusCode } from "axios";
import {
  InsertMentoSeedInput,
  InsertMentoSeedResponse,
  insertMentoSeedResponseShcmea,
} from "../../schemas/mento.schema";
import { useToast } from "../../components/common/Toast";

export const useInsertMentoSeed = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const toast = useToast();
  const request = async (data: InsertMentoSeedInput) => {
    try {
      setIsLoading(true);
      const apiRequest = await api.post<InsertMentoSeedResponse>(
        "/mento/seed",
        data
      );
      if (apiRequest.status === HttpStatusCode.Created) {
        const parsed = insertMentoSeedResponseShcmea.safeParse(apiRequest.data);
        if (!parsed.success) {
          setError(new Error("INVALID_INPUT_STATUS"));
          toast("INVALID_INPUT_STATUS");
          return;
        }

        return parsed.data;
      }
    } catch (err) {
      console.error(err);
      toast("UNKNOWN_ERROR");
    } finally {
      setIsLoading(false);
    }
  };
  return { request, isLoading, error };
};
