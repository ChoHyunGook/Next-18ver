import React, {useState} from "react"
import axios from "axios";
import tableStyles from '@/styles/Table.module.css'

export default function Grade(){
    const proxy = 'http://localhost:5000'
    const [inputs, setInputs] = useState({})

    const handleChange = (e) => {
        e.preventDefault()
        const {name, value} = e.target
        setInputs({...inputs, [name] : value})
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post(proxy + '/api/basic/grade', inputs)
        .then(res => {
            alert(`${JSON.stringify(res.data)}`)
            const grade = res.data
            document.getElementById('result-span').innerHTML=`
            <h3>국어점수 : ${grade.kor}</h3>
            <h3>영어점수 : ${grade.eng}</h3>
            <h3>수학점수 : ${grade.math}</h3>
            <h3>평균점수 : ${grade.avg}</h3>
            <h3>등급 : ${grade.grade}</h3>
            <h3>합격여부 : ${grade.res}</h3>
            `
        })
        .catch(err => alert(err))
    }
    
    return (<>
        <form action="" onSubmit={handleSubmit}>
        <table className={tableStyles.table}>
        <thead>
        <tr>
        <th colSpan={2}>
            <h2>성적표</h2>
        </th>
        </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                    <label><b>이름 </b></label>
                    <input name="name" onChange={handleChange}/>
                    </td>
                </tr>                   
                <tr>
                    <td>
                    <label><b>국어 성적 </b></label>
                    <input name="kor" onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                    <td>   
                    <label><b>영어 성적 </b></label>
                    <input name="eng" onChange={handleChange}/>
                    </td> 
                </tr>
                <tr>
                    <td>
                    <label><b>수학 성적 </b></label>
                    <input name="math" onChange={handleChange}/>
                    </td>
                </tr>
                <tr>
                <td>
                    <input type="submit" value="실행"/>&nbsp;</td>
                </tr>
            
            <tr><td colSpan={2}><div> <h3>결과 :</h3> <span id='result-span'></span></div></td></tr>
            <tr><td colSpan={2}><button onClick={ () => {history.back('/'); } } >뒤로가기</button></td></tr>
            </tbody>
            </table>
            </form>
    </>)
}