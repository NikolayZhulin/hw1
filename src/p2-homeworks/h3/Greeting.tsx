import React, {ChangeEvent} from 'react'
import s from './Greeting.module.css'
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

type GreetingPropsType = {
    name: string // need to fix any
    setNameCallback: (eVal:string)=>void // need to fix any
    addUser: ()=>void // need to fix any
    error: string // need to fix any
    totalUsers: number // need to fix any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {
    const inputClass = error?s.error: ''// need to fix with (?:)
    const onChangeText=(eventValue:string)=>{
        setNameCallback(eventValue)
    }
    
    return (
        <div>
            {/*<input value={name} onChange={setNameCallback} className={inputClass}/>*/}
            <SuperInputText onEnter={addUser} className={s.inputClass} type={'text'} onChangeText={onChangeText} name={name} error={error}/>
            {/*<button onClick={addUser}>add</button>*/}
            <SuperButton onClick={addUser}>ADD</SuperButton>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
