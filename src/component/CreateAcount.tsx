import * as React from "react";
import {
  Formik,
  FormikHelpers,
  FormikProps,
  Form,
  Field,
  FieldProps,
  ErrorMessage,
} from "formik";
import * as Yup from "yup";
interface MyFormValues {
  firstName: string;
  email: string;
  password: string;
}
//  const CreateAccount: React.FC<{}> = () => {
//    const initialValues: MyFormValues = { firstName: '' };
//    return (
//      <div>
//        <label className="block text-gray-700 text-sm font-bold mb-2" >
//         Username
//       </label>
//        <Formik
//          initialValues={initialValues}
//          onSubmit={(values, actions) => {
//            console.log({ values, actions });
//            alert(JSON.stringify(values, null, 2));
//            actions.setSubmitting(false);
//          }}
//        >
//          <Form>
//            <label htmlFor="firstName">First Name</label>
//            <Field id="firstName" name="firstName" placeholder="First Name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
//            <button type="submit">Submit</button>
//          </Form>
//        </Formik>
//      </div>
//    );
//  };

const CreateAccount: React.FC<{}> = () => {
  const initialValues: MyFormValues = {
    firstName: "",
    email: "",
    password: "",
  };
  return (
    <div className="w-full max-w-lg mx-auto mt-12 ">
      <Formik
        initialValues={initialValues}
        onSubmit={(values, actions) => {
          console.log({ values, actions });
          //alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
        validationSchema={Yup.object().shape({
          firstName: Yup.string()
            .strict(false)
            .trim()
            .required("*Username is required"),
          email: Yup.string()
            .strict(false)
            .trim()
            .required("*Email is required"),
          password: Yup.string()
            .strict(false)
            .trim()
            .required("*Password is required"),
        })}
      >
        {({ errors, touched }) => (
          <Form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4   ">
            <h1 className="mb-10 text-center text-xl font-bold">
              Please fill the form to create an account
            </h1>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <Field
                name="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                placeholder="please enter your email"
              />
              <div
                className={errors.email && touched.email ? "is-invalid " : ""}
              />
              <ErrorMessage
                name="email"
                component="div"
                className="invalid-feedback text-red-700"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Username
              </label>
              <Field
                name="firstName"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="firstName"
                placeholder="please enter your Username"
              />
              <div
                className={
                  errors.firstName && touched.firstName ? "is-invalid" : ""
                }
              />

              {/* {console.log("firstName",firstName)} */}
              <ErrorMessage
                name="firstName"
                component="div"
                className="invalid-feedback text-red-700"
              />
              {/*  */}
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Password
              </label>
              <Field
                name="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                placeholder="please enter your password"
              />
              <div
                className={
                  errors.password && touched.password ? "is-invalid" : ""
                }
              />
              <ErrorMessage
                name="password"
                component="div"
                className="invalid-feedback text-red-700"
              />
              {/*  */}
            </div>

            {/* <h1>{JSON.stringify(values, null, 2)}</h1> */}
            {/* <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" >
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Email" />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
      <p className="text-red-500 text-xs italic">Please choose a password.</p>
    </div> */}
            <div className="flex items-center justify-between display-flex">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Create Account
              </button>
              <button
                type="reset"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Clear Form
              </button>
            </div>
          </Form>
        )}
      </Formik>
      {/* <p className="text-center text-gray-500 text-xs">
    &copy;2020 Acme Corp. All rights reserved.
  </p> */}
    </div>
  );
};
export default CreateAccount;
