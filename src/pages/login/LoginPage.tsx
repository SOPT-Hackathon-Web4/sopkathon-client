import { useFunnel } from 'src/hooks/useFunnel';
import InstaInput from './components/InstaInput';
import PasswordInput from './components/PasswordInput';
import NameInput from './components/NameInput';
import { useState } from 'react';
// import axios from 'axios';
import ExistingPasswordInput from './components/ExistingPasswordInput';
import styled from '@emotion/styled';
// import { getMember, getPasswordCheck } from '@apis/member';
import { useNavigate, useParams } from 'react-router-dom';

const LOGIN_FORM_STEP = ['ID', 'PASSWORD', 'EXISTING_PASSWORD', 'NAME'] as const;

const LoginPage = () => {
  const { Funnel, setStep } = useFunnel(LOGIN_FORM_STEP, LOGIN_FORM_STEP[0]);

  const [instaValue, setInstaValue] = useState('');
  const [password, setPassword] = useState('');
  const [existingPassword, setExistingPassword] = useState('');

  const [name, setName] = useState('');

  const { next } = useParams();

  const navigate = useNavigate();
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const instaId = value.includes('@') ? value.split('@')[1] : '';
    setInstaValue(instaId);
    console.log({ instaValue: instaId });
  };
  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleExistingPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setExistingPassword(e.target.value);
  };

  const handleSubmit = async () => {
    navigate('/create-quiz');
    // try {
    //   /**@todo 정안 api 바꾸기 */
    //   const response = await axios.post('/your-api-endpoint', {
    //     instaId: instaValue,
    //     password,
    //     name,
    //   });
    //   console.log('회원가입 성공:', response.data);
    //   // Handle successful registration, e.g., navigate to a different page
    // } catch (error) {
    //   console.error('회원가입 실패:', error);
    //   // Handle registration failure
    // }
  };

  const handleDuplicatedInstaId = () => {
    if (next === 'mypage') {
      setStep(() => 'EXISTING_PASSWORD');
      return;
    } else {
      setStep(() => 'PASSWORD');
    }
    // try {
    //   getMember(id);
    //   setStep(() => 'PASSWORD');
    // } catch (error) {
    //   console.error('Error checking Instagram ID:', error);
    //   setStep(() => 'EXISTING_PASSWORD');
    // }
  };
  // const handleDuplicatedInstaId = async () => {
  //   try {
  //     /**@todo 정안 api 바꾸기 */
  //     setStep(() => 'PASSWORD');

  //     const response = await axios.get('/member', {
  //       headers: {
  //         instaId: `@${instaValue}`,
  //       },
  //     });
  //     if (response.data.success === true) {
  //       setStep(() => 'PASSWORD');
  //     } else {
  //       /**@todo 정안 api 바꾸기 */
  //       setStep(() => 'EXISTING_PASSWORD');
  //     }
  //   } catch (error) {
  //     console.error('Error checking Instagram ID:', error);
  //   }
  // };

  const handleDuplicate = () => {
    try {
      // getPasswordCheck(id, password);
      // navigate('/create-quiz');

      navigate('/mypage');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LoginPageWrapper>
      <Funnel>
        <Funnel.Step name="ID">
          <InstaInput
            onNext={() => {
              handleDuplicatedInstaId();
              // setStep(() => 'PASSWORD');
            }}
            instaValue={instaValue}
            onChange={handleInputChange}
          />
        </Funnel.Step>
        <Funnel.Step name="PASSWORD">
          <PasswordInput onNext={() => setStep(() => 'NAME')} password={password} onChange={handlePasswordChange} />
        </Funnel.Step>
        <Funnel.Step name="EXISTING_PASSWORD">
          <ExistingPasswordInput
            // onNext={() => setStep(() => 'NAME')}
            onNext={() => handleDuplicate()}
            existingPassword={existingPassword}
            onChange={handleExistingPasswordChange}
          />
        </Funnel.Step>
        <Funnel.Step name="NAME">
          <NameInput onNext={handleSubmit} name={name} onChange={handleNameChange} />
        </Funnel.Step>
      </Funnel>
    </LoginPageWrapper>
  );
};

export default LoginPage;

const LoginPageWrapper = styled.section`
  background-color: ${({ theme }) => theme.color.sub2};
  height: 100vh;
`;
