import React from 'react'
import s from './Message.module.css'

export type MessageType = {
	avatar: string
	name: string
	message: string
	time: string
}

export function Message(props: MessageType) {
	return (
		<div className={s.wrapper}>
			<img src={props.avatar} alt=""/>
			<div className={s.message}>
				<div>{props.name}</div>
				<div className={s.message_and_time}>{props.message}<span>{props.time}</span></div>
			</div>
		</div>
	)
}

export default Message
