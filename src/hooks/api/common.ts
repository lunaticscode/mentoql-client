import { useEffect, useState } from "react";
import { useToast } from "../../components/common/Toast";
import { api } from "../../utils/api";
import { HttpStatusCode } from "axios";
import { ZodObject, ZodUnion } from "zod";
type OutputSchema = ZodObject<any> | ZodUnion<any>;
const useGetApi = <Input, Output>(
  path: string,
  initParams: Input,
  outputSchema: OutputSchema,
  shouldFetch: boolean
) => {
  const [result, setResult] = useState<Output>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const toast = useToast();
  const request = async (data: Input) => {
    console.log(data);
    try {
      setIsLoading(true);
      const apiRequest = await api.get<Output>(path, { params: data });
      if (apiRequest.status === HttpStatusCode.Ok) {
        const parsed = outputSchema.safeParse(apiRequest.data);
        if (!parsed.success) {
          setError(new Error("INVALID_OUTPUT_STATUS"));
          return;
        }
        setResult(parsed.data as Output);
      }
    } catch (err) {
      console.error(err);
      toast("UNKNOWN_ERROR");
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    if (shouldFetch) {
      request(initParams);
    }
  }, [shouldFetch]);
  return {
    request,
    result,
    isLoading,
    error,
  };
};

const usePostApi = <Input, Output>(
  path: string,
  outputSchema: OutputSchema
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
export { useGetApi, usePostApi };
