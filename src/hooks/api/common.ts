import { useState } from "react";
import { useToast } from "../../components/common/Toast";
import { api } from "../../utils/api";
import { HttpStatusCode } from "axios";
import { ZodObject, ZodUnion } from "zod";

const usePostApi = <Input, Output>(
  path: string,
  outputSchema: ZodObject<any> | ZodUnion<any>
) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const toast = useToast();
  const request = async (data: Input) => {
    try {
      setIsLoading(true);
      const apiRequest = await api.post<Output>(path, data);
      if (apiRequest.status === HttpStatusCode.Created) {
        const parsed = outputSchema.safeParse(apiRequest.data);
        if (!parsed.success) {
          setError(new Error("INVALID_OUTPUT_STATUS"));
          return;
        }
        return parsed.data as Output;
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
export { usePostApi };
