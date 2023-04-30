import React, { useEffect } from "react";
import "../Styles/Add.css";
import Personal from "./Personal";
import Contacts from "./Contacts";
import Address from "./Address";
import Others from "./Others";
import { AiOutlineClose, AiOutlineCheck } from "react-icons/ai";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Add({ setShowAdd, getData }) {
  const schema = yup.object().shape({
    name: yup.string().required("Please enter the name field"),
    age: yup.lazy((value) =>
      value === ""
        ? yup.string().required("Please enter age field")
        : yup.number().positive().integer().max(100).required()
    ),
    gender: yup.string().required("Please enter the gender field"),
    mobile: yup.lazy((value) =>
      value === ""
        ? yup.string()
        : yup
            .number()
            .test(
              "len",
              "Please give a valid phone number",
              (val) => val.toString().length === 10
            )
    ),
    govtidType: yup.string(),
    occupation: yup.string(),
    nationality: yup.string(),
    relation: yup.string(),
    guardianName: yup.string().when("relation", (relation) => {
      if (relation == "") return yup.string();
      else return yup.string().required("Please enter gaurdians name");
    }),
    emergencyContact: yup.string().when("relation", (relation) => {
      if (relation == "") return yup.string();
      else
        return yup.lazy((value) =>
          value === ""
            ? yup.string().required("Please enter the emergency number")
            : yup
                .number("Please give a valid phone number")
                .test(
                  "len",
                  "Please give a valid phone number",
                  (val) => val.toString().length === 10
                )
        );
    }),
    email: yup.string().email(),
    address: yup.string(),
    city: yup.string(),
    state: yup.string(),
    country: yup.string(),
    pincode: yup.lazy((value) =>
      value === ""
        ? yup.string()
        : yup
            .number("Please give a valid pincode")
            .test(
              "len",
              "Please give a valid pincode",
              (val) => val.toString().length === 6
            )
    ),
    govtid: yup.string().when("govtidType", (govtidType) => {
      if (govtidType == "") return yup.string();
      else if (govtidType == "aadhar") {
        return yup.lazy((value) =>
          value === ""
            ? yup.string().required("Please enter your aadhar number")
            : yup
                .number("Please enter a valid aadhar number")
                .test(
                  "len",
                  "Please enter a valid aadhar number",
                  (val) => val.toString().length === 6
                )
        );
      } else if (govtidType == "pan") {
        return yup
          .string()
          .length(10, "Please enter valid PAN number")
          .required("Please enter you PAN number");
      }
    }),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  function formSubmit(data) {
    fetch("", {
      method: "POST",
      body: JSON.stringify(data),
    }).then(() => {
      getData();
      setShowAdd(false);
    });
  }

  useEffect(() => {
    if (errors && Object.keys(errors).length !== 0)
      alert(Object.values(errors)[0]?.message);
  }, [errors]);

  return (
    <div className="form-div">
      <span className="add-heading">Add Details</span>
      <form className="form" onSubmit={handleSubmit(formSubmit)}>
        <Personal register={register} />
        <Contacts register={register} />
        <Address register={register} />
        <Others register={register} />
        <div className="add-btns">
          <button className="btn" onClick={() => setShowAdd(false)}>
            <AiOutlineClose className="btn-icon" />
            Cancel
          </button>
          <button type="submit" className="btn">
            <AiOutlineCheck className="btn-icon" />
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
