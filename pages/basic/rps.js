import axios from "axios";
import React, {useState} from "react";
import tableStyles from '@/styles/Table.module.css'

export default function Rps() {
    const proxy = 'http://localhost:5000'
    const [inputs, setInputs] = useState({})

    const handleChange = (e) => {
        e.preventDefault()
        const {value, name} = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        axios
            .post(proxy + '/api/basic/rps', inputs)
            .then(res => {
                const rps = res
                    .data
                    document
                    .getElementById('result-span')
                    .innerHTML = `
            <h3>사용자 : ${rps.user}</h3>
            <h3>컴퓨터 : ${rps.computer}</h3>
            <h3>결과 : ${rps.res}</h3>
            `
            })
            .catch(err => alert(err))
        }

    return (
        <div>
            <form action="" onSubmit={handleSubmit}>
                <table className={tableStyles.table}>
                    <thead>
                        <tr>
                            <th colSpan={2}>
                                <h2>가위바위보</h2>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <select name="user" onChange={handleChange}>
                                    <option value="select">선택</option>
                                    <option value="0">가위(0)</option>
                                    <option value="1">바위(1)</option>
                                    <option value="2">보(2)</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td><input type="submit" value="실행"/></td>
                        </tr>
                        <tr>
                            <td>
                                <div>
                                    결과 :
                                    <span id='result-span'></span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <button
                                    onClick={() => {
                                        history.back('/');
                                    }}>뒤로가기</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>

        </div>

    )
}