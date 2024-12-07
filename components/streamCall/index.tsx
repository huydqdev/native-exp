import {
    StreamCall,
    StreamVideo,
    StreamVideoClient,
    User,
} from "@stream-io/video-react-native-sdk";
import { useEffect, useState } from "react";

const apiKey = "your-api-key"; // pending
const userId = "user-id"; // pending
const token = "authentication-token"; // pending
const callId = "my-call-id"; // pending
const user: User = { id: userId };

const client = new StreamVideoClient({ apiKey, user, token });
const call = client.call("default", callId);
call.join({ create: true });

export default function App() {
    return (
        <StreamVideo client={client}>
            <StreamCall call={call}>{/* Your UI */}</StreamCall>
        </StreamVideo>
    );
}
