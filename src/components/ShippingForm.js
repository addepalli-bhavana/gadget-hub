import { BiSolidUser } from "react-icons/bi";
import { FaSquarePhone } from "react-icons/fa6";

const ShippingForm = ({ errors, setErrors, formData, setFormData }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  return (
    <section>
      <form className="form shipping" noValidate>
        <h4>shipping information</h4>
        <div className={`input-box ${errors.name && "error-input-box"}`}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="Enter Name"
            autoFocus
          />
          <span>
            <BiSolidUser />
          </span>
        </div>
        {errors.name && <span className="error-msg">{errors.name}</span>}

        <div
          className={`contact-box input-box ${
            errors.contactNumber && "error-input-box"
          }`}
        >
          <span>+91</span>
          <input
            type="tel"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleInputChange}
            autoComplete="off"
            placeholder="Enter Contact Number"
          />
          <span>
            <FaSquarePhone />
          </span>
        </div>
        {errors.contactNumber && (
          <span className="error-msg">{errors.contactNumber}</span>
        )}

        <textarea
          cols="25"
          rows="6"
          name="address"
          value={formData.address}
          autoComplete="off"
          onChange={handleInputChange}
          placeholder="Enter Address here"
          className={errors.address && "error-text-area"}
        ></textarea>
        {errors.address && <span className="error-msg">{errors.address}</span>}
      </form>
    </section>
  );
};

export default ShippingForm;
