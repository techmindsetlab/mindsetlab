import ContactSVG from "../animation/contact-header";
import Divider from "../components/base/divider";
import BottomAnimation from "../animation/from-bottom";
import Paragraph from "../components/base/paragraph";
import Button from "../components/base/button";
import Input from "../components/base/input";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Dropdown from "../components/base/dropdown";
import { needs } from "../helper/const";
import { useState } from "react";

interface Props {
  scrollRotation: number;
}

type InitialValuesType = {
  name: string;
  email: string;
  brief: string;
};

const ContactPage = ({ scrollRotation }: Props) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleSelect = (option: string) => {
    setSelectedCategory(option);
  };

  const handleMailto = (values: InitialValuesType) => {
    const { name, brief } = values;

    const mailtoUrl = `mailto:hi@mindsetlab.id?subject=BRIEF PROJECT&body=Name: ${name}%0ANeeds: ${selectedCategory}%0A%0ABrief:%0A${encodeURIComponent(
      brief
    )}`;

    window.location.href = mailtoUrl;
  };

  return (
    <div>
      <div className="px-4 lg:px-12">
        <BottomAnimation
          duration={1.2}
          wrapperStyle="mt-[6rem] lg:mt-[7rem]"
          motionStyle="flex justify-between lg:px-8 lg:-ml-2 lg:mx-4 lg:px-0 lg:justify-center"
        >
          <ContactSVG isWhite />
        </BottomAnimation>
        <Divider scrollRotation={scrollRotation} />
      </div>

      <div className="lg:w-[70%] px-4 lg:px-12">
        <BottomAnimation duration={1.3}>
          <Paragraph
            size="xxl"
            style={{ lineHeight: "1.2" }}
            className="text-[#FAFAFA] text-2xl lg:text-5xl"
          >
            Let’s Make Something Amazing Together
          </Paragraph>
        </BottomAnimation>
        <BottomAnimation>
          <Paragraph
            size="xl"
            className="text-[#FAFAFA] text-base font-neue-corp-thin mt-6"
          >
            Have a question, a big idea, or just want to say hello? We’re all
            ears. Whether it’s turning dreams into reality or brainstorming the
            next big thing, this is where it all starts. Drop us a line, and
            let’s create something unforgettable. Ready to connect? Let’s make
            it happen.
          </Paragraph>
        </BottomAnimation>
      </div>
      <div className="bg-[#FAFAFA] lg:flex lg:px-12 px-4 mt-12">
        <div className="lg:w-[25%] w-full lg:border-r py-8 border-[#1E1E1E]">
          <Paragraph
            text="Get in Touch"
            className="font-neue-corp-bold text-[2rem] lg:text-4xl text-center lg:text-left text-[#1E1E1E]"
          />
          <div className="grid">
            <Button
              hasImage
              imgSrc="/linkedin_logo.svg"
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/company/mindsetlabid/",
                  "_blank"
                )
              }
              text={"Linkedin"}
              className="w-full lg:w-64 font-neue-corp-thin mt-6 px-3 lg:py-2 lg:text-lg text-[12px]"
            />
            <Button
              hasImage
              imgSrc="/instagram_logo.svg"
              onClick={() =>
                window.open(
                  "https://www.instagram.com/mindsetlabid/",
                  "_blank"
                )
              }
              text={"Instagram"}
              className="w-full lg:w-64 font-neue-corp-thin mt-6 px-3 lg:py-2 lg:text-lg text-[12px]"
            />
          </div>
        </div>
        <div className="lg:pl-12 lg:w-[70%] w-full py-8">
          <Paragraph
            text="How can we help ?"
            className="font-neue-corp-bold text-[2rem] text-center lg:text-left lg:text-4xl text-[#1E1E1E]"
          />
          <Formik
            initialValues={{
              name: "",
              email: "",
              brief: "",
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Name is required"),
              email: Yup.string()
                .email("Invalid email address")
                .required("Email is required"),
              brief: Yup.string().required("Brief description is required"),
            })}
            onSubmit={(values, actions) => {
              handleMailto(values);
              actions.setSubmitting(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="w-full mt-6">
                <Input name="name" placeholder="Name" className="mb-4 w-full" />
                <Input name="email" type="email" placeholder="Email" />
                <div className="mb-4">
                  <Dropdown
                    isForm
                    options={needs}
                    onSelect={handleSelect}
                    selectedCategory={selectedCategory}
                  />
                </div>
                <Input
                  isTextarea
                  name="brief"
                  placeholder="Brief Description"
                />
                <Button
                  type="submit"
                  isEnabledArrow
                  text={"Submit"}
                  disabled={isSubmitting}
                  className="w-44 lg:w-64 font-neue-corp-thin mt-6 px-3 lg:py-2 lg:text-lg text-[12px]"
                />
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
