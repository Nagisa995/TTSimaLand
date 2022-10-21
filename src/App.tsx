import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { AddressData } from "./components/address_data";
import { LoginAndPasswordForm } from "./components/login_password";
import { PhoneData } from "./components/phone_data";
import { STEPS } from "./helpers/default_value";
import { useAppSelector } from "./hooks/redux";
import { Header } from "./ui_elements/header";

function App() {
  const { nextStep } = useAppSelector((state) => state.authorizationReducer);
  const navigate = useNavigate();

  useEffect(() => {
    const isPartFilled = nextStep !== STEPS.FIRST;
    if (isPartFilled) {
      navigate(nextStep);
    }
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route index path={STEPS.FIRST} element={<LoginAndPasswordForm />} />
        <Route path={STEPS.SECOND} element={<AddressData />} />
        <Route path={STEPS.THIRD} element={<PhoneData />} />
      </Routes>
    </>
  );
}

export default App;
