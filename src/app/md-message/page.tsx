import React from "react";
import HeaderBlock from "./components/HeaderBlock";
import MessageBody from "./components/MessageBody";
import SignatureCallout from "./components/SignatureCallout";
import TrustedBy from "@/components/ui/TrustedBy";

export default function MDMessagePage() {
  return (
    <main className="bg-white">
      <HeaderBlock />
      <MessageBody />
      <SignatureCallout />
      <TrustedBy />
    </main>
  );
}
