import { userLogin } from "@/modules";
import React, {useEffect, useState} from "react";
import UserLogin from "@/components/user/UserLogin";
import { useDispatch,useSelector } from "react-redux";

const UserLoginPage = () => {
    const dispatch = useDispatch()
    const onSubmit = e => {
        e.preventDefault()
        const {userid,password} = form
        alert("1"+JSON.stringify(form))
        dispatch(userLogin({userid,password}))
      }
      const onChange = e => {
        e.preventDefault()
      }
    return (<UserLogin onSubmit = {onSubmit} onChange={onChange} form={form}/>)
}

export default UserLoginPage