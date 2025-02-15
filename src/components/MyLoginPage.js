import React, { useState } from "react";
import { useLogin } from "react-admin";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { CustomTextInput } from "../../components/common/CustomInputFields/TextInput";
import {
  Button,
  Container,
  Grid,
  Typography,
  Box,
  Card,
  CardContent,
  CardMedia,
} from "@mui/material";
import { Login } from "@mui/icons-material";

const MyLoginPage: React.FC = () => {
  const login = useLogin();

  type Input = {
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>();

  const onSubmit: SubmitHandler<Input> = (data) => {
    debugger;
    login(data);
  };

  return (
    <Grid container sx={{ height: "100vh" }}>
      {/* Left Side (Sign In Form) */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container maxWidth="xs">
          <Typography variant="h5" fontWeight="bold">
            Sign in
          </Typography>
          <Typography variant="body2" sx={{ mt: 1 }}>
            Don&apos;t have an account?{" "}
            <Link to="/open/vendorRegistration">Sign up</Link>
          </Typography>

          {/* Email Field */}
          <CustomTextInput
            label="Email address"
            placeholder="Enter your email"
            type="email"
            id="email"
            errors={errors.email && errors.email.message}
            register={register("email", { required: "Email is required" })}
          />

          {/* Password Field */}
          <CustomTextInput
            label="Password"
            placeholder="Enter your password"
            type="password"
            id="password"
            errors={errors.password && errors.password.message}
            register={register("password", {
              required: "Password is required",
            })}
          />

          {/* Forgot Password */}
          <Box sx={{ textAlign: "right", mt: 1 }}>
            <Link to="#">Forgot password?</Link>
          </Box>

          {/* Sign In Button */}
          <Button
            type="submit"
            variant="contained"
            sx={{
              mt: 2,
              backgroundColor: "#635DFF",
              color: "#fff",
              width: "100%",
            }}
            startIcon={<Login />}
          >
            Sign in
          </Button>

          {/* Demo Credentials */}
          <Card sx={{ mt: 2, p: 2, bgcolor: "#FFF3E0" }}>
            <Typography variant="body2">
              Use <strong>sofia@devias.io</strong> with password{" "}
              <strong>Secret1</strong>
            </Typography>
          </Card>
        </Container>
      </Grid>

      {/* Right Side (Illustration) */}
      <Grid
        item
        xs={12}
        md={6}
        sx={{
          backgroundColor: "#0F172A",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          textAlign: "center",
          padding: 3,
        }}
      >
        <Box>
          <Typography variant="h4" fontWeight="bold">
            Welcome to <span style={{ color: "#43B581" }}>Devias Kit</span>
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            A professional template that comes with ready-to-use MUI components.
          </Typography>

          {/* Mock Notifications */}
          <Card
            sx={{
              mt: 3,
              bgcolor: "#1E293B",
              color: "#fff",
              display: "inline-block",
              p: 1,
            }}
          >
            <Typography variant="body2">Your login code is XJH4</Typography>
          </Card>

          <Card
            sx={{
              mt: 2,
              display: "flex",
              alignItems: "center",
              bgcolor: "#fff",
              color: "#000",
              width: "fit-content",
              mx: "auto",
              p: 1,
              boxShadow: 3,
            }}
          >
            <CardMedia
              component="img"
              height="40"
              width="40"
              image=""
              alt="User Avatar"
              sx={{ borderRadius: "50%", mr: 1 }}
            />
            <CardContent sx={{ p: 0 }}>
              <Typography variant="subtitle2">Vanessa L.</Typography>
              <Typography variant="body2" color="text.secondary">
                vanes@acme.com
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
};

export default MyLoginPage;




































// // admin old code
// import React, { useState } from "react";
// import { useLogin } from "react-admin";
// import { SubmitHandler, useForm } from "react-hook-form";
// import { Link } from "react-router-dom";
// import { CustomTextInput } from "../../components/common/CustomInputFields/TextInput";
// import { Button } from "@mui/material";
// import { Login } from "@mui/icons-material";

// const MyLoginPage: React.FC = () => {
//   const login = useLogin();

//   // const handleSubmit = async (event: React.FormEvent) => {
//   //   event.preventDefault();

//   //   // try {
//   //   //   const response = await fetch('http://localhost:3000/api/login', {
//   //   //     method: 'POST',
//   //   //     headers: {
//   //   //       'Content-Type': 'application/json',
//   //   //     },
//   //   //     body: JSON.stringify({ email, password }),
//   //   //   });

//   //   //   if (response.ok) {
//   //   //     const data = await response.json();
//   //   //     localStorage.setItem('token', data.token);
//   //   //     alert('Login successful!');
//   //   //     window.location.href = '/';
//   //   //   } else {
//   //   //     const errorData = await response.json();
//   //   //     alert(`Login failed: ${errorData.message}`);
//   //   //   }
//   //   // } catch (error) {
//   //   //   alert('An error occurred. Please try again later.');
//   //   //   console.error('Error:', error);
//   //   // }
//   // };
//   type Input = {
//     email: string;
//     password: string;
//   };
//   const {
//     register,
//     watch,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<Input>();
//   const onSubmit: SubmitHandler<Input> = (data) => {
//     debugger;
//     login(data);
//   };

//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div
//         className="container d-flex justify-content-center align-items-center"
//         style={{ minHeight: "80vh" }}
//       >
//         <div className="card p-4 shadow-lg" style={{ width: "400px" }}>
//           <h3 className="text-center text-primary mb-4">Login</h3>
//             <div className="form-group">
//               <CustomTextInput
//                 label="Email"
//                 placeholder="Enter your email"
//                 type="email"
//                 id="email"
//                 errors={errors.email && errors.email.message}
//                 register={register("email", { required: "Email is required" })} 
//               />
//             </div>
//             <div className="form-group">
//               <CustomTextInput
//                 label="Password"
//                 placeholder="Enter your password"
//                 type="password"
//                 id="password"
//                 errors={errors.password && errors.password.message}
//                 register={register("password", { required: "Password is required" })}
//               />
//             </div>
//             <Button
//                       type="submit"
                      
//                       variant="contained"
//                       sx={{ width: "100%" }}
//                       startIcon={<Login />}
//                     >
//                       Login
//                     </Button>
//             <p className="text-center mt-3">
//               <a href="#">Forgot Password?</a>
//             </p>
//             {/* <p className="text-center mt-2">Or login with</p>
//             <div className="text-center">
//               <button type="button" className="btn btn-outline-primary mr-2">
//                 <i className="fab fa-facebook-f"></i> Facebook
//               </button>
//               <button type="button" className="btn btn-outline-danger">
//                 <i className="fab fa-google"></i> Google
//               </button>
//             </div> */}
//             <p className="text-center mt-3">
//               Don’t have an account? <Link to="/open/vendorRegistration">Sign Up</Link>
//             </p>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default MyLoginPage;
