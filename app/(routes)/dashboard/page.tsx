"use client";
import { Button } from "@/components/ui/button";
import { api } from "@/convex/_generated/api";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";
import { useConvex, useMutation, useQuery } from "convex/react";
import { useEffect } from "react";

function Dashboard() {
  const convex = useConvex();
  const { user, isLoading } = useKindeBrowserClient();

  const createUser = useMutation(api.user.create);

  const userExists = async () => {
    if (!user) return;
    const users = await convex.query(api.user.getByEmail, {
      email: user?.email as string,
    });
    if (users?.length === 0) {
      createUser({
        name: user.given_name!,
        email: user.email!,
        image: user.picture ? user.picture : undefined,
      }).then((res) => console.log(res));
    }
  };

  useEffect(() => {
    if (user && !isLoading) {
      userExists();
    }
  }, [user]);

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
