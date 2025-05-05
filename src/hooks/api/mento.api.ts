import {
  InsertMentoSeedInput,
  InsertMentoSeedResponse,
  insertMentoSeedResponseShcmea,
} from "../../schemas/mento.schema";
import { API_PATH } from "../../consts/api";
import { usePostApi } from "./common";

export const useInsertMentoSeed = () => {
  return usePostApi<InsertMentoSeedInput, InsertMentoSeedResponse>(
    API_PATH.CREATE_MENTO_SEED,
    insertMentoSeedResponseShcmea
  );
};
