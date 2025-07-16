import { useEffect, useState } from "react";

export function useAuth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useState<{
    name?: string;
    profileImage?: string;
  } | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const accessToken = localStorage.getItem("accessToken");
    const name = localStorage.getItem("name");
    const profileImage = localStorage.getItem("profileImage");

    setIsLoggedIn(!!accessToken);
    if (accessToken) {
      setProfile({
        name: name || "사용자",
        profileImage: profileImage || "/default-profile.png",
      });
    } else {
      setProfile(null);
    }
  }, []);

  return { isLoggedIn, profile };
}
