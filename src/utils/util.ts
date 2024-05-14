/**
 * 유틸리티 함수
 */

/**
 * @description 이메일 형식 체크 function
 * @param email
 * @returns {boolean}
 */
export const validateEmail = (email: string): boolean => {
  if (email) {
    const regexp = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(]?)$/;
    return !regexp.test(email.trim());
  }
  return true;
};

/**
 * @description 비밀번호 형식 체크 function : 영어+숫자+특수문자 조합, 8~32자
 * @param value
 * @returns {boolean}
 */
export const validatePassword = (value: string): boolean => {
  if (value) {
    const regexp = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[~!@#$%^&*()+|=_`-])[A-Za-z\d~!@#$%^&*()+|=_`-]{8,32}$/;
    return !regexp.test(value.trim());
  }
  return true;
};
