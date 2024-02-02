import React, { useEffect, useState } from "react";
import { Form, Formik, Field } from "formik";
import { Col, Container, Row } from "react-bootstrap";
import FormikInput from "../../utilities/FormikInput";
import SocialMediaAccountService from "../../services/socialMediaAccountService";
import { GetSocialMediaCategoryItem } from "../../models/responses/socialMediaAccount/getAllSocialMediaCategory";
import SelectBox from "./SelectBox";
import { object } from "yup";
import { UserInformationValidationMessageRule } from "../../constants/Validations/validationMessageRules";

type Props = {};

const SocialMediaAccountEdit = (props: Props) => {
  const [socialMediaAccounts, setsocialMediaAccounts] = useState<GetSocialMediaCategoryItem[]>([]);

const validationSchema = object ({
  inputUrl: UserInformationValidationMessageRule.inputsRequired
})

  const initialValues = {
    inputUrl: "",
  };

  useEffect(() => {
    const fetchSocialMediaAccount = async () => {
      try {
        const result = await SocialMediaAccountService.getAllCategory(0, 6);
        setsocialMediaAccounts(result.data.items)
      } catch (error) {
        console.error("API isteği sırasında bir hata oluştu:", error);
      }
    }; 
    fetchSocialMediaAccount();
  }, []);

  return (
    <div className="container mt-5">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <Container>
            <Row className="align-items-center">
              <Col lg={4}>
                <SelectBox defaultText="Seçiniz" selectBoxArray={socialMediaAccounts} className="mb-3"/>
                {/* <Field
                  as="select"
                  className="custom-field form-select"
                  name="socialMedia" // Başlangıçta bir değer yoksa, buradaki name özelliğini kullanabilirsiniz.
                >
                  <option value="" selected disabled>
                    Seçiniz
                  </option>
                  {socialMediaAccounts.map((socialMedia: any) => (
                    <option key={socialMedia.id} value={socialMedia.id}>
                      {socialMedia.name}
                    </option>
                  ))}
                </Field> */}
              </Col>
              <Col lg={8}>
                <FormikInput name="inputUrl" placeHolder="https://" />
              </Col>
            </Row>

            <button
              type="submit"
              className="button-save py-2 mb-3 mt-4 d-inline-block "
            >
              Kaydet
            </button>

            <Row>
              <Col xs={10}>
                <div className="col-12 my-2">
                  <label
                    className="input-label-text"
                    style={{ display: "block", marginBottom: "5px" }}
                  >
                    LinkedIn
                  </label>
                  <div className="section-header tobeto-input">
                    <input
                      readOnly
                      className="form-control  input-linkedin"
                      type="text"
                      value="https://www.linkedin.com/in/nida-kul/"
                    />

                    <Col xs={1}>
                      <button className="btn social-delete">
                        <i className="grade-delete-img"></i>
                      </button>
                    </Col>
                    <Col xs={1}>
                      <button className="btn">
                        <img
                          src={
                            process.env.PUBLIC_URL + "/images/pen-square.svg"
                          }
                          style={{ width: 23 }}
                        />
                      </button>
                    </Col>
                  </div>
                </div>
              </Col>
            </Row>
            <Col>
              <label
                className="attentionText"
                style={{ display: "block", marginBottom: "5px" }}
              >
                En fazla 3 adet medya seçimi yapılabilir.
              </label>
            </Col>
          </Container>
        </Form>
      </Formik>
    </div>
  );
};

export default SocialMediaAccountEdit;
