import React from 'react';
import { Field, Form, Formik } from 'formik';
import Button from '../../Button/Button';
import Input from '../../Input/Input';
import LoadnError from '../../LoadnError/LoadnError';

import styles from './questions.m.css';
import { questionValidation } from '../../OrderForm/ValidationScheme/Validation';
import { useUserQuestionMutation } from '../../../Store/Slices/questionSlice';
import Spinner from '../../Spinner/Spinner';

const Questions = () => {
  const [userQuestion, { error, isLoading, isError, isSuccess }] =
    useUserQuestionMutation();
  const handleSubmit = async (values, { resetForm }) => {
    const email = values.email.trim();
    try {
      await userQuestion({ email });
    } catch (e) {
      console.log(e);
    }
    resetForm();
  };

  return (
    <div className={styles.question__wrapper}>
      <p className={styles.question__question}>Маєте питання ?</p>
      {isLoading ? (
        <Spinner />
      ) : (
        <Formik
          initialValues={{
            email: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={questionValidation}
        >
          <Form>
            <div className={`${styles.question__field} flex__centered`}>
              <Field
                id='email'
                name='email'
                type='email'
                placeholder='Електронна адресса'
                component={Input}
              />
              <Button type={'submit'} modificator={'honey'}>
                Відправити
              </Button>
            </div>
          </Form>
        </Formik>
      )}
      <LoadnError error={isError} success={isSuccess} />
    </div>
  );
};

export default Questions;
