import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface Profile {
  email?: string;
  name?: string;
  picture?: string;
}

const useProfileStore = create<Profile>()(
  persist(
    (_set) => ({
      email: undefined,
      name: undefined,
      picture: undefined,
    }),
    {
      name: "user-profile",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
export default useProfileStore;
