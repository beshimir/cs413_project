// react helpers meme
import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

// wrappers
import MainWrapper from "./wrappers/MainWrapper";
import FormWrapper from "./wrappers/FormWrapper";
import HeaderWrapper from "./wrappers/Header";

// components
import FormButton from "../../components/FormButton";
import Header from "../../components/Header";

// service
import { loginApi } from "../../services/auth";

const LoginPage = () => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onFormSubmit = async (e) => {
    try {
      e.preventDefault();

      console.log({ email, password });

      const result =
        //await loginApi({ email, password });

        // hardcoded success state
        {
          success: true,
          jwt: "random info",
        };

      console.log({ result });

      const { success } = result;
      console.log({ success });

      if (success) {
        history.push("/");
        console.log(" success ");
      } else {
        history.push("/login");
      }
    } catch (error) {
      console.log("[LoginPage/onFormSubmit]", { error });
    }
  };

  return (
    <>
      <div className="flex flex-col justify-between">
        <HeaderWrapper>
          <Header />
        </HeaderWrapper>

        <MainWrapper className="mainwrapper">
          <FormWrapper className="formw" onSubmit={() => onFormSubmit}>
            <input
              className="email mb-5 p-2"
              field="email"
              type="email"
              placeholder="Please enter your email..."
              onChange={(email) => setEmail(email.target.value)}
            />

            <input
              className="password mb-5 p-2"
              field="password"
              type="password"
              placeholder="Please enter your password..."
              onChange={(password) => setPassword(password.target.value)}
            />

            <FormButton className="button" type="submit" />
          </FormWrapper>
        </MainWrapper>
      </div>
    </>
  );
};
export default LoginPage;
