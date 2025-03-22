import React from "react";
import {
  useParticipantIds,
  useLocalSessionId,
  useAudioTrack,
  DailyAudio,
} from "@daily-co/daily-react";
import { VideoPlayer } from "../VideoPlayer";

interface CallProps {
  onLeave: () => void;
}

export const Call: React.FC<CallProps> = ({ onLeave }) => {
  const participantIds = useParticipantIds();
  const localSessionId = useLocalSessionId();
  const { isOff: isAudioOff } = useAudioTrack(localSessionId ?? "");

  return (
    <div className="w-full max-w-4xl mx-auto bg-gray-800 rounded-lg overflow-hidden shadow-xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {participantIds.map((id) => (
          <VideoPlayer key={id} id={id} />
        ))}
      </div>
      <div className="flex justify-center items-center gap-4 p-4 bg-gray-700">
        <button 
          onClick={onLeave} 
          className="btn btn-danger"
        >
          End Call
        </button>
        {!isAudioOff && <DailyAudio />}
      </div>
    </div>
  );
};
