import React from 'react';
import './About.css';

function About(props) {
    console.log(props);
    return (
        <section className="section__about">
            <div className="about__desc">
                <h4>WATCHMOV는?</h4>
                <p>WATCHMOV는 리액트를 기반으로 만든 영화정보를 제공하는 리액트 앱입니다.
                    axios를 이용하여 영화 API의 영화데이터를 받아와서 평점순으로 데이터를 보여주고,
                    영화카드를 클릭하면 영화 상세 정보를 보여줍니다.
                    라우터를 이용하여 빠르게 페이지 간 이동을 가능하게 하고 미디어쿼리를 이용한 반응형 앱입니다.
                </p>
            </div>
        </section>
    );
}

export default About;