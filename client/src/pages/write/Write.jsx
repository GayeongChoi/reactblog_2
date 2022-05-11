import React from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";

function Write() {
  return (
    <>
      <Header />
      <main id="main">
        <div className="blog__write">
          <form>
            <fieldset>
              <legend className="ir_so">블로그 게시글 작성 영역</legend>
              <div>
                <label htmlFor="blogCate">카테고리</label>
                <select name="blogCate" id="blogCate">
                  <option value="javascript">javascript</option>
                  <option value="jquery">jquery</option>
                  <option value="html">html</option>
                  <option value="css">css</option>
                </select>
              </div>
              <div>
                <label htmlFor="blogTitle">제목</label>
                <input
                  type="text"
                  name="blogTitle"
                  id="blogTitle"
                  placeholder="제목을 넣어주세요"
                />
              </div>
              <div>
                <label htmlFor="blogContents">내용</label>
                <textarea
                  name="blogContents"
                  id="blogContents"
                  placeholder="내용을 넣어주세요!"
                ></textarea>
              </div>
              <div>
                <label htmlFor="blogFile">파일</label>
                <input
                  type="file"
                  name="blogFile"
                  id="blogFile"
                  placeholder="사진을 넣어주세요! 사진은 jpg, gif, png 파일만 지원이 됩니다."
                />
              </div>
              <button type="submit" value="저장하기">
                저장하기
              </button>
            </fieldset>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Write;
