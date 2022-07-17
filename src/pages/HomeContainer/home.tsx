import React, { useRef, useEffect, useState } from "react";
import SEO from "../../configs/seo";
import Layout from "../../Layout/layout";
import Section from "../../components/Section/section";
import TopButton from "../../components/TopButton/topButton";
import Input from "../../components/Input/inputField";
import Textarea from "../../components/Textarea/textarea";
import Button from "../../components/Button/button";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useStateContext } from "../../Contexts/ContextProvider";
import { SectionData } from "../../data";
import Email from "../../images/mail.svg";
import Call from "../../images/call.svg";
import Corporate from "../../images/corporate.svg";
import "./home.scss";

const Home = ({ props }: any) => {
  const { showScroll } = useStateContext();
  const sectionRef = useRef([] as (HTMLDivElement | null)[]);
  const [menuItems, setMenuItems] = useState([
    { label: "Products", offsetTop: sectionRef.current[1]?.offsetTop },
    { label: "About", offsetTop: sectionRef.current[2]?.offsetTop },
    { label: "Contact", offsetTop: sectionRef.current[4]?.offsetTop },
  ]);
  useEffect(() => {
    setMenuItems([
      { label: "Products", offsetTop: sectionRef.current[1]?.offsetTop },
      { label: "About", offsetTop: sectionRef.current[2]?.offsetTop },
      { label: "Contact", offsetTop: sectionRef.current[4]?.offsetTop },
    ]);
  }, [sectionRef.current[1]?.offsetTop]);
  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object().shape({
      fullname: Yup.string()
        .min(3, "Name must be at least 3 characters")
        .required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
    }),
    onSubmit: (values, actions) => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "yummy-bite-contact", ...values }),
      })
        .then(() => {
          alert("Success");
          actions.resetForm();
        })
        .catch(() => {
          alert("Error");
        })
        .finally(() => actions.setSubmitting(false));
    },
  });

  return (
    <Layout itemList={menuItems}>
      <SEO title="Home" />
      <div className="content">
        {SectionData.map((d, i) => (
          <Section
            index={i}
            key={d.title}
            title={d.title}
            text={d.text}
            image={d.image}
            inverse={d.inverse}
            buttonLabel={d.button}
            scrollRef={i === 0 ? sectionRef.current[1]?.offsetTop : 0}
            productsData={d.products}
            ref={(ref) => (sectionRef.current[i] = ref)}
          />
        ))}
        <div className="contactWrapper">
          <div className="formWrapper">
            <form
              name="yummy-bite-contact"
              method="POST"
              onSubmit={formik.handleSubmit}
              data-netlify="true"
            >
              <input
                type="hidden"
                name="form-name"
                value="yummy-bite-contact"
              />
              <Input
                label="Full name"
                type="text"
                name="fullname"
                value={formik.values.fullname}
                onChange={formik.handleChange}
                error={formik.errors.fullname}
                required
              />
              <Input
                label="Email"
                name="email"
                type="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                error={formik.errors.email}
                required
              />
              <Textarea
                label="Message"
                name="message"
                value={formik.values.message}
                onChange={formik.handleChange}
              />
              <Button label="Send" type="submit" fullWidth />
            </form>
          </div>
          <div className="infoWrapper">
            <div className="infoCercle">
              <p className="info">Info</p>
              <div className="itemsWrapper">
                <div className="infoItem">
                  <img src={Email} alt="email" />
                  <span className="infoText">yummyBite@gmail.com</span>
                </div>
                <div className="infoItem">
                  <img src={Call} alt="phone" />
                  <span className="infoText">+216 66 666 666</span>
                </div>
                <div className="infoItem">
                  <img src={Corporate} alt="address" />
                  <span className="infoText">13 street, Tunis, Tunisia</span>
                </div>
              </div>
            </div>
            <div className="purpleCercle" />
          </div>
        </div>
        {showScroll && <TopButton />}
      </div>
    </Layout>
  );
};

export default Home;
