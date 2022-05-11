import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function Setting() {
  return (
    <>
      <Header />
      <main id="main">
        <section className="blog__login">
          <div className="member__form">
            <h3>회원 정보</h3>
            <div className="join-intro">
              <div className="face">
                <img
                  src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                  alt="기본이미지"
                />
              </div>
              <div className="intro">자기소개해주세요!</div>
            </div>
            <div className="join-info">
              <ul>
                <li>
                  <strong>이메일</strong>
                  <span>web@naver.com</span>
                </li>
                <li>
                  <strong>닉네임</strong>
                  <span>리치클럽</span>
                </li>
                <li>
                  <strong>이름</strong>
                  <span>황상연</span>
                </li>
                <li>
                  <strong>생일</strong>
                  <span>1999-09-03</span>
                </li>
                <li>
                  <strong>번호</strong>
                  <span>010-9312-8002</span>
                </li>
                <li>
                  <strong>성별</strong>
                  <span></span>
                </li>
                <li>
                  <strong>사이트</strong>
                  <span></span>
                </li>
              </ul>
            </div>
            <div className="join-btn">
              <a href="/">수정하기</a>
              <a href="/">탈퇴하기</a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Setting;
