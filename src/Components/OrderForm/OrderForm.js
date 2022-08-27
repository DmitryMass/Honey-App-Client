import React from 'react';
import { Field, Form, Formik } from 'formik';

import Button from '../Button/Button';
import Input from '../Input/Input';
import Title from '../Title/Title';
import LoadnError from '../LoadnError/LoadnError';
import Spinner from '../Spinner/Spinner';

import { orderValidation } from './ValidationScheme/Validation';
import { useUserOrderMutation } from '../../Store/Slices/orderSlice';

import inputStyles from '../Input/input.m.css';
import styles from './order-form.m.css';

const OrderForm = ({ scrolls }) => {
  const [userOrder, { isError, isLoading, isSuccess }] = useUserOrderMutation();
  const handleSubmit = async (values, { resetForm }) => {
    const newValues = {};
    for (const key in values) {
      newValues[key] = values[key].trim();
    }
    try {
      await userOrder({ ...newValues });
    } catch (e) {
      console.log(e);
    }
    resetForm();
  };

  return (
    <div className={styles.form__wrapper}>
      <div className='container'>
        <div className={styles.form__form}>
          <Title modificator={'order'}>Оформити замовлення</Title>
          <Formik
            initialValues={{
              name: '',
              email: '',
              container: '0.7',
              amount: '1',
              message: '',
            }}
            onSubmit={handleSubmit}
            validationSchema={orderValidation}
          >
            <Form>
              <LoadnError error={isError} success={isSuccess} />
              {isLoading ? <Spinner /> : null}
              <div className={styles.form__flex} ref={scrolls}>
                <Field
                  id='name'
                  name='name'
                  placeholder="Введіть ваше ім'я"
                  component={Input}
                />
                <Field
                  id='email'
                  name='email'
                  type='email'
                  placeholder='Електронна адресса'
                  component={Input}
                />
                <div className={styles.form__select__box}>
                  <Field
                    className={inputStyles.input__container}
                    id='container'
                    name='container'
                    type='container'
                    component='select'
                  >
                    <option value='0.7'>0.7 л</option>
                    <option value='1.5'>1.5 л</option>
                    <option value='3.0'>3.0 л</option>
                  </Field>
                  <Field
                    className={inputStyles.input__amount}
                    id='amount'
                    name='amount'
                    type='select'
                    component='select'
                  >
                    <option value='1'>1 шт.</option>
                    <option value='2'>2 шт.</option>
                    <option value='3'>3 шт.</option>
                    <option value='4'>4 шт.</option>
                    <option value='more'>Більше 4</option>
                  </Field>
                </div>
                <Field
                  className={inputStyles.input__textarea}
                  id='message'
                  name='message'
                  placeholder='Поле для деталей'
                  component='textarea'
                />
                <Button type={'submit'} modificator={'order'}>
                  Підтвердити
                </Button>
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
