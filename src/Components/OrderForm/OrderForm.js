import { Field, Form, Formik } from 'formik';
import React from 'react';
import Input from '../Input/Input';

import styles from './order-form.m.css';

const OrderForm = () => {
  return (
    <div className={styles.form__wrapper}>
      <div className='container'>
        <Formik
          initialValues={{
            name: '',
            email: '',
            container: '0.7 л',
            amount: '1',
            textarea: '',
          }}
        >
          <Form>
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
            <div>
              <Field
                id='container'
                name='container'
                type='container'
                component='select'
              >
                <option value='0.7'>0.7 л</option>
                <option value='1.5'>1.5 л</option>
                <option value='3.0'>3.0 л</option>
              </Field>
              <Field id='amount' name='amount' type='select' component='select'>
                <option value='1'>1 шт.</option>
                <option value='2'>2 шт.</option>
                <option value='3'>3 шт.</option>
                <option value='4'>4 шт.</option>
                <option value='more'>Більше 4</option>
              </Field>
            </div>
            <Field
              id='textarea'
              name='textarea'
              placeholder='Поле для деталей'
              component='textarea'
            />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default OrderForm;
