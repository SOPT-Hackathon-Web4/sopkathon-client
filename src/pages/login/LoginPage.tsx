import { useFunnel } from 'src/hooks/useFunnel';
import InstaInput from './components/InstaInput';
import PasswordInput from './components/PasswordInput';
import NameInput from './components/NameInput';

const LOGIN_FORM_STEP = ['ID', 'PASSWORD', 'NAME'] as const;

const LoginPage = () => {
  const { Funnel, setStep } = useFunnel(LOGIN_FORM_STEP, LOGIN_FORM_STEP[0]);

  return (
    <Funnel>
      <Funnel.Step name="ID">
        <InstaInput onNext={() => setStep(() => 'PASSWORD')} />
      </Funnel.Step>
      <Funnel.Step name="PASSWORD">
        <PasswordInput onNext={() => setStep(() => 'NAME')} />
      </Funnel.Step>
      <Funnel.Step name="NAME">
        <NameInput onNext={() => console.log('회원가입 POST')} />
      </Funnel.Step>
    </Funnel>
  );
};

export default LoginPage;
