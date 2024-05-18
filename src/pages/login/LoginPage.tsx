import { useFunnel } from 'src/hooks/useFunnel';
import InstaInput from './components/InstaInput';

const LOGIN_FORM_STEP = ['ID', 'PASSWORD'] as const;

const LoginPage = () => {
  const { Funnel, setStep } = useFunnel(LOGIN_FORM_STEP, LOGIN_FORM_STEP[0]);

  return (
    <Funnel>
      <Funnel.Step name="ID">
        <InstaInput onNext={() => setStep(() => 'PASSWORD')} />
      </Funnel.Step>
      <Funnel.Step name="PASSWORD">
        <div>비밀번호입력</div>
      </Funnel.Step>
    </Funnel>
  );
};

export default LoginPage;
