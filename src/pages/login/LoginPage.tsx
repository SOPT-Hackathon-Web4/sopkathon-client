import { useFunnel } from 'src/hooks/useFunnel';

const LOGIN_FORM_STEP = ['ID', 'PASSWORD'] as const;

const LoginPage = () => {
  const { Funnel, setStep } = useFunnel(LOGIN_FORM_STEP, LOGIN_FORM_STEP[0]);

  return (
    <Funnel>
      <Funnel.Step name="ID">
        <div onClick={() => setStep(() => 'PASSWORD')}>아이디입력</div>
      </Funnel.Step>
      <Funnel.Step name="PASSWORD">
        <div>비밀번호입력</div>
      </Funnel.Step>
    </Funnel>
  );
};

export default LoginPage;
