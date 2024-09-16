"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { useMutation, useQuery } from "convex/react";
import { useEffect } from "react";

function Dashboard() {
  const { user, isLoading } = useKindeBrowserClient();

  const users = useQuery(api.user.getByEmail, {
    email: user?.email as string,
  });

  const createUser = useMutation(api.user.create);

  useEffect(() => {
    if (user && !isLoading) {
      if (users === null || users?.length === 0) {
        createUser({
          name: user.given_name!,
          email: user.email!,
          image: user.picture ? user.picture : undefined,
        }).then((res) => console.log(res));
      }
    }
  }, [user, users]);

  return (
    <div>
      Dashboard
      <Button>
        <LogoutLink>Logout</LogoutLink>
      </Button>
    </div>
  );
}

export default Dashboard;
