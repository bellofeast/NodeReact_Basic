import React, { useEffect } from 'react'
import Axios from 'axios'
import { withRouter } from 'react-router-dom'

function LandingPage(props) {

    useEffect(() => {
        Axios.get('/api/hello')
        .then(response => { console.log(response )})
    }, [])

    const onClickHandler = () => {
        Axios.get('/api/users/logout')
        .then(response => {
            if(response.data.success) {
                //history는 react-router-dom을 이용해서 사용
                props.history.push('/login')
            } else {
                alert('로그아웃 하는데 실패했습니다.')
            }
        })
    }

    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center'
            ,width: '100%', height: '100vh'
        }}>
            <h2>시작 페이지</h2>

            <button onClick={onClickHandler}>
                로그아웃
            </button>
        </div>
    )
}

export default withRouter(LandingPage)