import React, { useRef } from 'react'

const MsgInput = ({mutate}) => {

    const textRef = useRef(null);

    const onSubmit = e => {
        e.preventDefault();
        e.stopPropagation();
        
        const text = textRef.current.value
        textRef.current.value = ''
        mutate(text)
    }

  return (
    <form onSubmit={onSubmit} className="messages__input">
        <textarea 
            ref={textRef}
            placeholder="内容を入力してください。"
        />
        <button type='submit'>入力</button>
    </form>
  )
}

export default MsgInput