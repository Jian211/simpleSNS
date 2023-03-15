import MsgItem from "./MsgItem"

const UserIds = ["jian","sae","taesong","junho"];
const getRandomUserId = () => UserIds[Math.round(Math.random() * 3)]

const msgs = Array(50)
    .fill(0)
    .map((_,i) => ({
        id: 1 + i,
        userId : getRandomUserId(),
        timestamp : 1234567890123 + i * 1000 * 60,
        text: `${i + 1} mock data`
    }))
    .reverse()

const MsgList = () => {

    return (
    <ul>
        {msgs.map( msg => (
            <MsgItem key={msg.id} {...msg} />
        ))}
    </ul>
  )
}

export default MsgList