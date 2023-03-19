import { useState } from "react";
import MsgInput from "./MsgInput";
import MsgItem from "./MsgItem"

const UserIds = ["jian","sae","taesong","junho"];
const getRandomUserId = () => UserIds[Math.round(Math.random() * 3)]

const defaultMsgs = Array(50)
    .fill(0)
    .map((_,i) => ({
        id: 1 + i,
        userId : getRandomUserId(),
        timestamp : 1234567890123 + i * 1000 * 60,
        text: `${i + 1} mock data`
    }))
    .reverse()

const MsgList = () => {
    const [msgs, setMsgs] = useState(defaultMsgs);

    const onCreate = (text) => {
        
        const newMsg = {
            id: msgs.length + 1,
            userId : getRandomUserId(),
            timestamp: Date.now(),
            text: `${msgs.length + 1} ${text}`
        }
        setMsgs( currMsgs => [newMsg, ...currMsgs])
        console.log(msgs)
    }
    return (
    <>
        <MsgInput 
            mutate={onCreate}
        />
        <ul>
            {msgs.map( msg => (
                <MsgItem key={msg.id} {...msg} />
                ))}
        </ul>
    </>
  )
}

export default MsgList