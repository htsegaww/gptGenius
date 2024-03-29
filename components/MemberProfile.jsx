import { fetchOrGenerateTokens } from "@/utils/action";
import { UserButton, auth, currentUser } from "@clerk/nextjs";
import React from "react";

const MemberProfile = async () => {
  // this will get the current logged in user
  const user = await currentUser();
  const { userId } = auth();
  await fetchOrGenerateTokens(userId);

  return (
    <div className="px-4 flex items-center gap-2">
      {/* aftersignout is when the user signout */}
      <UserButton afterSignOutUrl="/" />
      <p>{user.emailAddresses[0].emailAddress}</p>
    </div>
  );
};

export default MemberProfile;
