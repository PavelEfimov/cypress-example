const requiredRule = value => (!value ? 'Обязательно для заполнения' : null);
const minLengthRule = value =>
  value && value.length < 5 ? 'Минимальная длина поля 5 символов' : null;
const maxLengthRule = value =>
  value && value.length > 10 ? 'Максимальная длина поля 10 символов' : null;

const compose = (...rules) => value => {
  const result = rules.reduce((err, rule) => err || rule(value), null);
  return result;
};

export { requiredRule, minLengthRule, maxLengthRule, compose };
