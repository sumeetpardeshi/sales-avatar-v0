import React from "react";
import { useDaily } from "@daily-co/daily-react";
import { createConversation } from "../../api/createConversation";
import type { IConversation } from "../../types";

interface CallControlsProps {
  onCallStarted: (conversation: IConversation) => void;
  loading: boolean;
  disabled: boolean;
}

export const CallControls: React.FC<CallControlsProps> = ({
  onCallStarted,
  loading,
  disabled,
}) => {
  const DailyCall = useDaily();

  const handleStartCall = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (DailyCall) {
      try {
        const conversation = await createConversation();
        await DailyCall.join({ url: conversation.conversation_url });
        onCallStarted(conversation);
      } catch (error) {
        alert(`Failed to join the call. ${error}`);
      }
    }
  };

  return (
    <form onSubmit={handleStartCall} className="token-form">
      <button disabled={loading || disabled} type="submit">
        {loading ? "Loading..." : "Start Video Call"}
      </button>
    </form>
  );
};
