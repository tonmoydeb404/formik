import { Field, FieldArray, Form, Formik } from "formik";
import toast, { Toaster } from "react-hot-toast";

import "./App.css";
import ErrorProvider from "./components/ErrorProvider";
import ImagePreview from "./components/ImagePreview";
import { formInitialValue, formSchema } from "./schema/formSchema";

function App() {
  // handle submit
  const handleSubmit = (values) => {
    console.log(values);
    toast.success("Successfully validated! check console");
  };

  return (
    <>
      <div className="app">
        <Formik
          validationSchema={formSchema}
          initialValues={formInitialValue}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue }) => (
            <Form noValidate>
              {values.avatar && <ImagePreview file={values.avatar} />}
              <label htmlFor="avatar">Avatar:</label>
              <input
                name="avatar"
                id="avatar"
                type="file"
                accept="image/*"
                multiple={false}
                onChange={(e) =>
                  setFieldValue("avatar", e.currentTarget.files[0])
                }
              />
              <ErrorProvider name="avatar" />

              <br />

              <label htmlFor="name">Name:</label>
              <Field name="name" id="name" />
              <ErrorProvider name="name" />

              <br />

              <label htmlFor="email">Email:</label>
              <Field name="email" id="email" type="email" />
              <ErrorProvider name="email" />

              <br />

              <label htmlFor="phone">Phone:</label>
              <Field name="phone" id="phone" type="tel" />
              <ErrorProvider name="phone" />

              <br />

              <label htmlFor="birth">Date of Birth:</label>
              <Field name="birth" id="birth" type="date" />
              <ErrorProvider name="birth" />

              <br />

              <label htmlFor="bio">Bio</label>
              <Field name="bio" id="bio" as="textarea" />
              <ErrorProvider name="bio" />

              <br />

              <label>Other Links:</label>

              <Field name="links.github" type="url" placeholder="github" />
              <ErrorProvider name="links.github" />
              <Field name="links.facebook" type="url" placeholder="facebook" />
              <ErrorProvider name="links.facebook" />
              <Field name="links.website" type="url" placeholder="website" />
              <ErrorProvider name="links.website" />

              <br />

              <label htmlFor="hobbies">Hobbies:</label>
              <ErrorProvider name="hobbies" />

              <FieldArray
                name="hobbies"
                id="hobbies"
                render={(arrayHelpers) => (
                  <div>
                    {values.hobbies.map((_, index) => (
                      <div key={index} className="hobbies">
                        <Field
                          name={`hobbies.${index}`}
                          type="text"
                          placeholder={index + 1}
                        />
                        <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                          className="btn btn-danger"
                        >
                          -
                        </button>
                      </div>
                    ))}
                    <div>
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => arrayHelpers.push("")}
                      >
                        add a hobby
                      </button>
                    </div>
                  </div>
                )}
              />

              <br />
              <br />

              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
      <Toaster position="bottom-right" reverseOrder={false} />
    </>
  );
}

export default App;
