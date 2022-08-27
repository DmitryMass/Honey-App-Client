import * as yup from 'yup';

export const orderValidation = yup.object().shape({
  name: yup
    .string()
    .min(2, "Ім'я повинно мати не менше 2 букв.")
    .max(15, "Ім'я повинно мати не більше 15 букв.")
    .matches(/[А-Д\A-Z\a-z\а-я]/gi, "Ім'я повинно мати тільки букви.")
    .trim()
    .required("Ім'я обов'язкове поле"),
  email: yup.string().email().min(5).max(30).label('Email').trim().required(),
  container: yup.string().label('Container').required(),
  amount: yup.string().label('Amount').required(),
  textarea: yup.string().label('Textarea').trim(),
});

export const questionValidation = yup.object().shape({
  email: yup.string().email().min(5).max(30).label('Email').trim().required(),
});
