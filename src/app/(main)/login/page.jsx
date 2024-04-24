import LoginForm from "@/components/login-form";
import PageHeader from "@/components/page-header";
import React from "react";

export const metadata = {
  title: "Login",
  description: "High quality and cheap products",
};

const LoginPage = () => {
  return (
    <>
      <PageHeader title="Login" />
      <LoginForm />
    </>
  );
};

export default LoginPage;
