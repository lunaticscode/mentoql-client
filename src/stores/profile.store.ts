import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface Profile {
  email?: string;
  name?: string;
  picture?: string;
}

const useProfileStore = create<Profile>()(
  persist(
    (set) => ({
      email: undefined,
      name: undefined,
      picture: undefined,
      setProfile: (newProfile: Profile) =>
        set((prev) => ({ ...prev, ...newProfile })),
    }),
    {
      name: "user-profile",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
export default useProfileStore;
