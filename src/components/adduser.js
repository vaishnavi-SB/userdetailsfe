import React, { useState } from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { Card, Grid, Button } from "@mui/material";
import axios from "axios";
import * as yup from "yup";
import { useFormik } from "formik";

export default function Addusers() {
  const validationSchema = yup.object({
    name: yup.string().required("Required"),
    dob: yup.string().required("Required"),
    email: yup.string().required("Required"),
    number: yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      dob: "",
      email: "",
      number: "",
    },
    validationSchema,
    onSubmit: (values) => {
      console.log("values", values);
      axios
        .post("http://localhost:4000/users/user-form", values)
        .then((res) => {
          if (res.status === 200) {
            alert("Student successfully created");
            window.location.href = "http://localhost:3000/";
          } else Promise.reject();
        })
        .catch((err) => alert("Something went wrong"));
    },
  });

  return (
    <>
      <Grid container justifyContent="center" sx={{ paddingTop: "34px" }}>
        <Card sx={{ padding: "22px" }}>
          <form onSubmit={formik.handleSubmit}>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12}>
                <TextField
                  id="name"
                  placeholder="Name"
                  name="name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item xs={12} style={{ marginTop: "12px" }}>
                <TextField
                  id="dob"
                  placeholder="Date of birth"
                  type="date"
                  name="dob"
                  onChange={formik.handleChange}
                  value={formik.values.dob}
                  error={formik.touched.dob && Boolean(formik.errors.dob)}
                  helperText={formik.touched.dob && formik.errors.dob}
                  style={{ width: "222px" }}
                />
              </Grid>
              <Grid item xs={12} style={{ marginTop: "12px" }}>
                <TextField
                  id="email"
                  placeholder="e-mail"
                  name="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>

              <Grid item xs={12} style={{ marginTop: "12px" }}>
                <TextField
                  id="number"
                  placeholder="Phone number"
                  name="number"
                  onChange={formik.handleChange}
                  value={formik.values.number}
                  error={formik.touched.number && Boolean(formik.errors.number)}
                  helperText={formik.touched.number && formik.errors.number}
                />
              </Grid>

              <Grid item xs={12} style={{ marginTop: "12px" }}>
                <Button variant="contained" type="submit">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Card>
      </Grid>
    </>
  );
}
