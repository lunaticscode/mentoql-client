import { useEffect, useState } from "react";
import { useToast } from "../../components/common/Toast";
import { api } from "../../utils/api";
import { HttpStatusCode } from "axios";
import { ZodObject } from "zod";

type OutputSchema = ZodObject<any>;

export const getApi = async <Input, Output>(
  path: string,
  params: Input,
  outputSchema: OutputSchema
) => {
  try {
    const apiRequest = await api.get<Output>(path, { params });
    if (apiRequest.status === HttpStatusCode.Ok) {
      const parsed = outputSchema.safeParse(apiRequest.data);
      if (!parsed.success) {
        throw new Error("INVALID_OUTPUT_STATUS");
      }
      return apiRequest.data;
    }
  } catch (err) {
    throw err;
  }
};

export const postApi = async <Input, Output>(
  path: string,
  data: Input,
  outputSchema: OutputSchema
) => {
  try {
    const apiRequest = await api.post<Output>(path, data);
    if (apiRequest.status === HttpStatusCode.Created) {
      const parsed = outputSchema.safeParse(apiRequest.data);
      if (!parsed.success) {
        throw new Error("INVALID_OUTPUT_STATUS");
      }
      return apiRequest.data;
    }
  } catch (err) {
    throw err;
  }
};

const useGetApi = <Input, Output>(
  path: string,
  initParams: Input,
  outputSchema: OutputSchema,
  shouldFetch: boolean,
  toastMessage?: { success: string; error: string }
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
          if (toastMessage) {
            toast(toastMessage.error);
          }
          setError(new Error("INVALID_OUTPUT_STATUS"));
          return;
        }
        if (toastMessage) {
          toast(toastMessage.success);
        }
        setResult(parsed.data as Output);
      }
    } catch (err) {
      console.error(err);
      if (toastMessage) {
        toast(toastMessage.error);
      }
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
  outputSchema: OutputSchema,
  toastMessage?: { success: string; error: string }
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
          if (toastMessage) {
            toast(toastMessage.error);
          }
          setError(new Error("INVALID_OUTPUT_STATUS"));
          return;
        }
        if (toastMessage) {
          toast(toastMessage.success);
        }
        return parsed.data as Output;
      }
    } catch (err) {
      console.error(err);
      if (toastMessage) {
        toast(toastMessage.error);
      }
      toast("UNKNOWN_ERROR");
    } finally {
      setIsLoading(false);
    }
  };
  return { request, isLoading, error };
};
export { useGetApi, usePostApi };
