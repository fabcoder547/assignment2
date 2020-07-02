import React from "react";
import Base from "./Base";
import "../Css/doctor.css";
export default function Doctor() {
  return (
    <Base isDisplay={false}>
      <div className="doctors-page">
        <div className="container-fluid ">
          <div className="corner">
            <a href="#" style={{ color: "blue" }}>
              GoodRx
            </a>
            / <a href="#">Online Doctors</a>
          </div>

          <div className="center-btn">
            <div>
              <a href="#" className="btn1">
                Online Doctors
              </a>
              <a href="#" className="btn2">
                Lab Tests
              </a>
            </div>
          </div>

          <div className="main-page">
            <h3>See an Online Doctor Today</h3>
            <p>
              GoodRx helps you compare telehealth services with board-certified
              doctors. No insurance necessary. Complete an online doctor visit
              and pick up your prescription today.
            </p>
            <div className="inputs">
              <select id="services">
                <option value="" disabled="" selected="">
                  Select Treatment
                </option>
                <option value="/treatment/acne">Acne</option>
                <option value="/treatment/asthma">Asthma</option>
                <option value="/treatment/anxiety">Anxiety</option>
                <option value="/treatment/birth-control">Birth Control</option>
                <option value="/treatment/cold-and-flu">Cold and Flu</option>
                <option value="/treatment/cold-sore">Cold Sore</option>
                <option value="/treatment/coronavirus">
                  Coronavirus (COVID-19)
                </option>
                <option value="/treatment/depression">Depression</option>
                <option value="/treatment/diabetes">Diabetes</option>
                <option value="/treatment/eczema">Eczema</option>
                <option value="/treatment/erectile-dysfunction">
                  Erectile Dysfunction
                </option>
                <option value="/treatment/hair-loss">Hair Loss</option>
                <option value="/treatment/migraine">Migraine</option>
                <option value="/treatment/thyroid">Thyroid</option>
                <option value="/treatment/uti">Urinary Tract Infection</option>
                <option value="/treatment/general-consultation">
                  General Consultation (Other)
                </option>
                <option value="/treatment/pediatrics">Pediatrics</option>
                <option value="/treatment/online-therapy">
                  Online Therapy
                </option>
                <option value="/treatment/prescription-refill">
                  Prescription Refill
                </option>
              </select>
              <p className="btn">Find an online doctor</p>
            </div>
          </div>
        </div>
      </div>
    </Base>
  );
}
