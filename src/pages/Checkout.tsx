import { useState } from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

const STATUS = {
  IDLE: "IDLE",
  SUBMITTED: "SUBMITTED",
  SUBMITTING: "SUBMITTING",
  COMPLETED: "COMPLETED",
};

// interface emptyAdressType {
//   city: string;
//   country: string;
// }

// Declaring outside component to avoid recreation on each render
const emptyAddress = {
  city: "",
  country: "",
  district: "",
};

const checkoutSchema = Yup.object().shape({
  city: Yup.string().required("City is required."),
  country: Yup.string().required("Country is required"),
  district: Yup.string().required("District is required"),
});

export default function Checkout() {
  const [saveError, setSaveError] = useState(null);
  const [status, setStatus] = useState("");

  // function getErrors(address: emptyAdressType) {
  //   //Using YUP For Validation
  //   const result = {};
  //   if (!address.city) result.city = "City is required.";
  //   if (!address.country) result.country = "Country is required.";
  //   return result;
  // }

  function handleSubmit() {
    setStatus(STATUS.COMPLETED);
  }

  return (
    <div className="mt-24">
      <Formik
        initialValues={emptyAddress}
        // validate={getErrors}           // Uncomment this to use our existing validation logic instead
        validationSchema={checkoutSchema} // Using YUP for validation
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, status = STATUS.IDLE }) => {
          if (saveError) throw saveError;
          if (status === STATUS.COMPLETED) return <h1>Thanks for shopping!</h1>;

          return (
            <Form onSubmit={handleSubmit}>
              <h1 className="text-2xl font-bold mb-6 ml-12">Shipping Info</h1>
              <div className="w-2/4 ml-12 bg-slate-100 p-3 rounded-lg">
                <label htmlFor="city">City *</label>
                <br />
                <Field
                  type="text"
                  name="city"
                  className="border-solid border-2 border-sky-800"
                />
                <ErrorMessage name="city" component="p" />
              </div>

              <div className="w-2/4 ml-12 bg-slate-100 p-3 rounded-lg">
                <label htmlFor="district">District *</label>
                <br />
                <Field
                  type="text"
                  name="district"
                  className="border-solid border-2 border-sky-800"
                />
                <ErrorMessage name="district" component="p" />
              </div>

              <div className="w-2/4 ml-12 bg-slate-100 p-3 rounded-lg">
                <label htmlFor="country">Country *</label>
                <br />
                <Field as="select" name="country">
                  <option value="">Select Country</option>
                  <option value="China">China</option>
                  <option value="India">India</option>
                  <option value="United Kingodom">United Kingdom</option>
                  <option value="USA">USA</option>
                </Field>
                <ErrorMessage name="country" component="p" />
              </div>
              <div className="w-1/5 ml-12 mt-6 bg-slate-200 text-slate-900 rounded-md p-2 hover:bg-slate-300 cursor-pointer">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Submit"
                  disabled={status === STATUS.SUBMITTING}
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
}
