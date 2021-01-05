import * as Yup from "yup";
import { string } from "yup";
import { boolean } from "yup/lib/locale";
import "yup-phone";

const loginFormSchema = Yup.object().shape({
  username: Yup.string().when("isPhone", {
    is: true,
    then: string().phone("Please enter valid phone number").required(),
    otherwise: string()
      .required("Please enter username")
      .min(2, "Name must be more than two characters"),
  }),
  password: Yup.string()
    .required("Please enter password")
    .min(6, "Password must be more than 6 characters"),
});

export default loginFormSchema;
