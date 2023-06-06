import React from "react";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Form, Input, InputMessage, Label, Button, ErrorSpan } from './styles';

export function ContactForm() {
    const Schema = Yup.object().shape({
        name: Yup.string().required('Campo obrigatório'),
        phone: Yup.string().required('Campo obrigatório'),
        state: Yup.string().required('Campo obrigatório'),
        message: Yup.string().required('Campo obrigatório'),
        email: Yup.string().email('Invalid email').required('Campo obrigatório'),
      });
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      state: "",
      message: "",
    },
    onSubmit: (values) => {
      alert('Mensagem enviada com sucesso!');
    },
    validationSchema: Schema,
  });

  return (
    <Form onSubmit={formik.handleSubmit}>
      <Label htmlFor="name">Full Name</Label>
      <Input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.name}
      />
       {formik.errors.name && formik.touched.name && (<ErrorSpan>{formik.errors.name}</ErrorSpan>)}
      <Label htmlFor="email">E-mail</Label>
      <Input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />
       {formik.errors.email && formik.touched.email && (<ErrorSpan>{formik.errors.email}</ErrorSpan>)}
      <Label htmlFor="phone">Phone</Label>
      <Input
        id="phone"
        name="phone"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.phone}
      />
       {formik.errors.phone && formik.touched.phone && (<ErrorSpan>{formik.errors.phone}</ErrorSpan>)}
      <Label htmlFor="state">State</Label>
      <Input
        id="state"
        name="state"
        type="text"
        onChange={formik.handleChange}
        value={formik.values.state}
      />
       {formik.errors.state && formik.touched.state && (<ErrorSpan>{formik.errors.state}</ErrorSpan>)}
        <Label htmlFor="message">Message</Label>
       <InputMessage
         id="message"
         name="message"
         type="textarea"
         onChange={formik.handleChange}
         value={formik.values.message}
       />
        {formik.errors.message && formik.touched.message && (<ErrorSpan>{formik.errors.message}</ErrorSpan>)}
      <Button type="submit">Send</Button>
    </Form>
  );
}
