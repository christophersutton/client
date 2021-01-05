import * as Yup from "yup";

const loginFormSchema = Yup.object().shape({
    name: Yup.string()
      .required("Please enter a name")
  ,
  email: Yup.string()
    .required("Please enter a valid email")
    .email("Please enter a valid email")
    ,
  message: Yup.string()
    .required("Please enter a message")
});

export default loginFormSchema;
