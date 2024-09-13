"use client";
import { Button } from "@/components/ui/button";
import {
  LogoutLink,
  useKindeBrowserClient,
} from "@kinde-oss/kinde-auth-nextjs";

function Dashboard() {
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
