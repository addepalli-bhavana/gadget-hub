import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { TiTick } from "react-icons/ti";
import { toast } from "react-toastify";
import { GrFormNextLink, GrFormPreviousLink } from "react-icons/gr";
import ShippingForm from "./ShippingForm";
import Summary from "./Summary";
import { ConfirmOrder } from "./ConfirmOrder";
import CartContext from "../contexts/CartContext";
import { checkoutSteps } from "../utils/constants";
import { validateForm } from "../utils/helpers";

const CheckoutContent = ({ setIsOrderPlaced }) => {
  const { clearCart, storeOrders, cart } = useContext(CartContext);
  const [currentStep, setCurrentStep] = useState(1);
  const [isCompleted, setIsCompleted] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    address: "",
  });
  const history = useHistory();

  const calculateProgress = () => {
    return ((currentStep - 1) / (checkoutSteps.length - 1)) * 100;
  };

  let activeComponent;
  switch (currentStep) {
    case 1:
      activeComponent = (
        <ShippingForm
          errors={errors}
          setErrors={setErrors}
          formData={formData}
          setFormData={setFormData}
        />
      );
      break;
    case 2:
      activeComponent = <Summary formData={formData} />;
      break;
    case 3:
      activeComponent = <ConfirmOrder />;
      break;
    default:
      activeComponent = <div></div>;
      break;
  }

  const handleNext = async () => {
    if (currentStep === 1) {
      if (
        validateForm(setErrors, formData, {
          email: false,
          password: false,
          confirmPassword: false,
          name: true,
          contactNumber: true,
          address: true,
        })
      ) {
        setCurrentStep(currentStep + 1);
      } else {
        toast.error("Please fill out all fields correctly");
      }
    } else if (currentStep === 2) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
      const presentCart = [...cart];
      const presentOrders = presentCart.map((item) => {
        return {
          ...item,
          customerName: formData.name,
          deliveryAddress: formData.address,
          contactNumber: formData.contactNumber,
          orderedOn: new Date().toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
          deliveryDate: new Date(
            new Date().getTime() + 2 * 24 * 60 * 60 * 1000
          ).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          }),
        };
      });
      storeOrders(presentOrders);
      clearCart();
      setIsOrderPlaced(true);
      history.replace("/success-message");
      setTimeout(() => {
        setIsOrderPlaced(false);
        history.replace("/orders");
      }, 8500);
    }
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => {
      if (prevStep === 1) {
        return prevStep;
      } else {
        setIsCompleted(false);
        return prevStep - 1;
      }
    });
  };

  return (
    <section className="checkout section-center section">
      <div className="stepper">
        {checkoutSteps.map((step, index) => {
          return (
            <div
              key={step.id}
              className={`step ${
                (index + 1 < currentStep || isCompleted) && "completed-step"
              } ${index + 1 === currentStep && "active-step"}`}
            >
              <span className="step-number">
                {index + 1 < currentStep || isCompleted ? (
                  <span>
                    <TiTick />
                  </span>
                ) : (
                  index + 1
                )}
              </span>
              <h5 className="step-name">{step.label}</h5>
            </div>
          );
        })}
        <div className="stepper-bar">
          <div
            className="stepper-progress"
            style={{ width: `${calculateProgress()}%` }}
          ></div>
        </div>
      </div>
      {activeComponent}
      <div className="step-btns">
        <button
          type="button"
          className={`btn back-btn ${currentStep === 1 && "btn-disabled"}`}
          onClick={handlePrev}
        >
          <GrFormPreviousLink /> back
        </button>
        <button type="button" className="btn next-btn" onClick={handleNext}>
          {currentStep === 3 ? "confirm" : "next"} <GrFormNextLink />
        </button>
      </div>
    </section>
  );
};

export default CheckoutContent;
