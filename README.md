<div align="center">

<h2> To Zero </h2>

![1  서비스 로고](https://github.com/SOPT-Hackathon-Web4/sopkathon-client/assets/66528589/aea7c2d1-435d-40cc-ad6d-c6597c8d2c4d)

<div>퀴즈를 통해 향하는 너와 나 사이의 거리 0km, To Zero

친해지고 싶지만 계기와 명분이 부족한 이들에게, 성향 퀴즈 문답을 통해 상대방을 알아가며 최종적으로 친해질 기회를 마련해주는 서비스 </div>

</div>

<h2> ✨ 주요 기능 </h2>

<h3> 1️⃣ 내 퀴즈 만들기 </h3>

![image](https://github.com/SOPT-Hackathon-Web4/sopkathon-client/assets/66528589/ff537087-5db4-497c-9d1a-157c2f00dfdb)![퀴즈 공유](https://github.com/SOPT-Hackathon-Web4/sopkathon-client/assets/66528589/e9671029-f879-4f1b-a27b-63d9ee0a2be6)



<div ><strong> 내 취향 관련 퀴즈</strong>를 만들어 다른 사용자들이 풀도록 하고, 다 맞춘 <strong>상대방의 정보</strong>를 볼 수 있다.<br/></div>

<h3> 2️⃣ 다른 사람 퀴즈 풀기 </h3>

![퀴즈 결과 = 2](https://github.com/SOPT-Hackathon-Web4/sopkathon-client/assets/66528589/fd9a42bd-c3f4-471a-ab6a-2d6b3255f845)

<div >친해지고 싶은 사람의 <strong>퀴즈를 풀고</strong>, 다 일치하면 상대방에게 <strong>내 이름과 인스타 아이디</strong>를 <strong>전달</strong> 할 수 있다.  <br/></div>

<h2> 👥 Team </h2>

<table align="center">
    <tr align="center">
      <td style="min-width: 150px;">
            <a href="https://github.com/gudusol">
              <img src="https://github.com/gudusol.png" width="200" alt="gudusolProfile">
              <br />
              <b>gudusol</b>
            </a>
        </td>
      <td style="min-width: 150px;">
            <a href="https://github.com/ExceptAnyone">
              <img src="https://github.com/ExceptAnyone.png" width="200" alt="ExceptAnyoneProfile">
              <br />
              <b>ExceptAnyone</b>
            </a>
        </td>
      <td style="min-width: 150px;">
            <a href="https://github.com/sinji2102">
              <img src="https://github.com/sinji2102.png" width="200" alt="sinji2102Profile">
              <br />
              <b>sinji2102</b>
            </a>
        </td>
    </tr>
    <tr align="center">
       <td>
            유태승 <br/>
      </td>
       <td>
            장정안 <br/>
      </td>
       <td>
            윤신지 <br/>
      </td>
    </tr>
  	<tr align="center">
       <td>
            메인 페이지 <br/>
            마이페이지 <br/>
            결과 확인 페이지 <br/>
      </td>
       <td>
            로그인/회원가입 <br/>
      </td>
       <td>
            퀴즈 생성 페이지 <br/>
            퀴즈 푸는 페이지 <br/>
      </td>
    </tr>
</table>

<h2> 🛠 기술스택 </h2>

<div align=center> 
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white"> 
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> 
  <br>

  <img src="https://img.shields.io/badge/yarn-2C8EBB?style=for-the-badge&logo=yarn&logoColor=white"> 
  <img src="https://img.shields.io/badge/StyledComponents/emotion-DB7093?style=for-the-badge&logo=styledComponents&logoColor=white"> 
  <br>
</div>

<br/>

<h2>  📄 컨벤션 및 브랜치 전략 </h2>
<h3>컨벤션</h3>
<li> 해커톤의 특성 상 빠른 작업을 위해, css 컨벤션 등은 따로 정하지 않았습니다.</li>
<br/>

| 커밋 컨벤션 | 용도                     |
| ----------- | ------------------------ |
| feat        | 새 기능 추가             |
| fix         | 오류 수정                |
| chore       | 간단한 수정 및 파일 추가 |
| refactor    | 리팩토링                 |
| style       | 코드 스타일 수정         |

<br/>

<h3>브랜치 전략</h3>

<li>브랜치 또한 해커톤의 특성에 맞춰 빠른 개발을 위해 기능별로 브랜치를 작업하지 않고 한 사람 당 한 개의 브랜치를 가지고 작업하기로 결정하였습니다.</li>
<li>같은 이유로, PR을 작성하지 않는 동시에 develop에서 merge 시 충돌을 예방하기 위해 브랜치 merge 방식을 정하였습니다.</li>
</br>

1. 각자 이름 브랜치에서 작업
2. 작업 완료 후 develop → 이름브랜치 방향으로 머지
3. 2번 과정에서 충돌이 생기면 충돌 처리(각자 이름 브랜치에서 충돌 처리)
   1. 충돌 처리 중 다른 사람이 머지했을 수도 있으므로 혹시모르니 develop → 이름 한번 더
4. 이름브랜치 → develop 머지

<br />

| 브랜치 이름 | 용도            |
| ----------- | --------------- |
| main        | 배포용          |
| develop     | 작업용          |
| TaeSeungYoo | 작업용 - 유태승 |
| JeongAnJang | 작업용 - 장정안 |
| SinJiYun    | 작업용 - 윤신지 |

<br/>

<h2> 📁 폴더 구조 </h2>

```
📦public
 ┣ 📂svg
 ┃ ┣ 📜ic_artist1.svg
 ┃ ┣ 📜ic_background.svg
 ┃ ┣ 📜ic_brunch-logo.svg
 ┃ ┣ 📜ic_logo.svg
 ┃ ┣ 📜ic_main-icon.svg
 ┃ ┣ 📜ic_result-img.svg
 ┃ ┣ 📜ic_retry-img.svg
 ┃ ┗ 📜ic_subscribe.svg
 ┗ 📜vite.svg
📦src
 ┣ 📂apis
 ┃ ┣ 📂article
 ┃ ┃ ┣ 📜getArticle.ts
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜postArticle.ts
 ┃ ┣ 📂member
 ┃ ┃ ┣ 📜deleteMember.ts
 ┃ ┃ ┣ 📜getMember.ts
 ┃ ┃ ┣ 📜getMemberDetail.ts
 ┃ ┃ ┣ 📜getPasswordCheck.ts
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂quiz
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜postCheckQuiz.ts
 ┃ ┃ ┗ 📜postQuiz.ts
 ┃ ┗ 📜index.ts
 ┣ 📂assets
 ┃ ┣ 📂svg
 ┃ ┃ ┣ 📜IcArtist1.tsx
 ┃ ┃ ┣ 📜IcBackground.tsx
 ┃ ┃ ┣ 📜IcBrunchLogo.tsx
 ┃ ┃ ┣ 📜IcMainIcon.tsx
 ┃ ┃ ┣ 📜IcResultImg.tsx
 ┃ ┃ ┣ 📜IcRetryImg.tsx
 ┃ ┃ ┣ 📜IcSubscribe.tsx
 ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📜custom.d.ts
 ┃ ┗ 📜react.svg
 ┣ 📂components
 ┃ ┣ 📂Button
 ┃ ┃ ┗ 📜Button.tsx
 ┃ ┣ 📂funnel
 ┃ ┃ ┗ 📜Funnel.tsx
 ┃ ┣ 📂Input
 ┃ ┃ ┗ 📜Input.tsx
 ┃ ┣ 📂list
 ┃ ┃ ┗ 📜ZeroKmList.tsx
 ┃ ┣ 📂QuizBox
 ┃ ┃ ┗ 📜QuizBox.tsx
 ┃ ┗ 📜index.ts
 ┣ 📂constants
 ┃ ┗ 📜quizData.tsx
 ┣ 📂hooks
 ┃ ┗ 📜useFunnel.tsx
 ┣ 📂pages
 ┃ ┣ 📂CreateQuiz
 ┃ ┃ ┗ 📜CreateQuiz.tsx
 ┃ ┣ 📂dev
 ┃ ┃ ┗ 📜Dev.tsx
 ┃ ┣ 📂home
 ┃ ┃ ┣ 📂CheckLogin
 ┃ ┃ ┃ ┗ 📜CheckLogin.tsx
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┗ 📂StartButton
 ┃ ┃ ┃ ┃ ┗ 📜StartButton.tsx
 ┃ ┃ ┗ 📜Home.tsx
 ┃ ┣ 📂login
 ┃ ┃ ┣ 📂components
 ┃ ┃ ┃ ┣ 📜ExistingPasswordInput.tsx
 ┃ ┃ ┃ ┣ 📜InstaInput.tsx
 ┃ ┃ ┃ ┣ 📜NameInput.tsx
 ┃ ┃ ┃ ┗ 📜PasswordInput.tsx
 ┃ ┃ ┗ 📜LoginPage.tsx
 ┃ ┣ 📂myPage
 ┃ ┃ ┗ 📜MyPage.tsx
 ┃ ┣ 📂ResultQuiz
 ┃ ┃ ┗ 📜ResultQuiz.tsx
 ┃ ┣ 📂RetryQuiz
 ┃ ┃ ┗ 📜RetryQuiz.tsx
 ┃ ┣ 📂SolveQuiz
 ┃ ┃ ┗ 📜SolveQuiz.tsx
 ┃ ┣ 📂SolveQuizRetry
 ┃ ┃ ┗ 📜SolveQuizRetry.tsx
 ┃ ┗ 📜index.ts
 ┣ 📂styles
 ┃ ┣ 📜emotion.d.ts
 ┃ ┣ 📜generator.ts
 ┃ ┣ 📜global.ts
 ┃ ┣ 📜reset.ts
 ┃ ┗ 📜theme.ts
 ┣ 📂typings
 ┃ ┗ 📜commonType.ts
 ┣ 📂utils
 ┃ ┣ 📜error.ts
 ┃ ┗ 📜util.ts
 ┣ 📜App.tsx
 ┣ 📜main.tsx
 ┣ 📜routes.tsx
 ┗ 📜vite-env.d.ts
```

<h3>우리조 그라운드 룰</h3>

1. 서로에게 상처가 되지 않도록 둥글둥글하게 말하기!
2. 모르는게 있으면 바로바로 물어보고, 상세하게 설명해주기!
3. 쫄지말고 적극적인 의견을 제시하기!
4. 재밌게 진행하기!

<h2> 새싹 웨비 Before and After</h2>
<h3>Before</h3>

![KakaoTalk_20240518_223247808](https://github.com/SOPT-Hackathon-Web4/sopkathon-client/assets/66528589/409ce92f-ca27-4dbe-a682-148cd0391068)
 
<h3>After</h3>

![KakaoTalk_20240519_074659597](https://github.com/SOPT-Hackathon-Web4/sopkathon-client/assets/66528589/ebad1996-6add-4f45-9914-af1826d59c62)

