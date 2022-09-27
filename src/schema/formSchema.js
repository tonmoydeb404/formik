import * as Yup from "yup";

export const formSchema = Yup.object({
  avatar: Yup.mixed()
    .required()
    .test("fileSize", "File must be less than 1MB", (value) => {
      return value != undefined && value && value.size <= 1000000;
    })
    .test("type", "Only images are supported", (value) => {
      return value != undefined && value && value.type.includes("image");
    }),
  name: Yup.string()
    .min(3, "name should have minimum 3 character")
    .max(30, "name should not larger then 30 character")
    .required(),
  email: Yup.string().email("enter a valid email").required(),
  phone: Yup.string().matches(
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
    "Phone number is not valid"
  ),
  birth: Yup.date().required(),
  bio: Yup.string()
    .min(10, "minimum 10 character required")
    .max(110, "maximum 110 character can be add")
    .required(),
  links: Yup.object({
    github: Yup.string()
      .url("github url is not valid")
      .test("github path", "github url is not valid", (value) => {
        return (
          value === undefined ||
          (value && value.includes("https://github.com/"))
        );
      }),
    facebook: Yup.string()
      .url("facebook url is not valid")
      .test("facebook path", "facebook url is not valid", (value) => {
        return (
          value === undefined ||
          (value && value.includes("https://facebook.com/"))
        );
      }),
    website: Yup.string().url(),
  }),
  hobbies: Yup.array()
    .of(Yup.string().required("empty hobbies not allowed"))
    .min(1, "minimum one hobbies should have"),
});

export const formInitialValue = {
  avatar: "",
  name: "",
  email: "",
  phone: "",
  birth: "",
  bio: "",
  links: {
    github: "https://github.com/",
    facebook: "https://facebook.com/",
    website: "",
  },
  hobbies: [""],
};
