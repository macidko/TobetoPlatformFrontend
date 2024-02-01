import React, { useEffect, useState, ReactNode } from "react";
import { Field, Form, Formik } from "formik";
import { Col, Container, Image, Row } from "react-bootstrap";
import { GetCityItem } from "../../models/responses/city/getCityResponse";
import CityService from "../../core/services/cityService";
import SelectBox from "./SelectBox";
import UserProfileService from "../../core/services/userProfileService";
import { GetByIdUser } from "../../models/responses/user/getByIdUser";
import { ProfileDto } from "../../models/responses/user/profileDto";
import { date, object, string } from "yup";
import { UserInformationValidationMessageRule } from "../../utilities/validationMessageRules/validationMessageRules";
import FormikInput from "../../utilities/FormikInput";

const validationSchema = object({
  firstName: UserInformationValidationMessageRule.firstName,
  lastName: UserInformationValidationMessageRule.lastName,
  phone: UserInformationValidationMessageRule.phone,
  birthdate: UserInformationValidationMessageRule.birthdate,
  identityNumber: UserInformationValidationMessageRule.identityNumber,
  email: UserInformationValidationMessageRule.email,
  country: UserInformationValidationMessageRule.country,
  street: UserInformationValidationMessageRule.textArea,
  aboutMe: UserInformationValidationMessageRule.textArea,
});

type Props = {};

const ProfileInformationEdit2 = (props: Props) => {
  const [cities, setCities] = useState<GetCityItem[]>([]);
  // const [selectedCityId, setSelectedCityId] = useState<number | null>(null);
  const [districts, setDistricts] = useState<any[]>([]);
  const [profileData, setProfileData] = useState<GetByIdUser>();

  const getUser = async (userId: number) => {
    try {
      const result = await UserProfileService.getById(userId);
      setProfileData(result.data);
    } catch (error) {
      console.log("Id ile kullanıcı alınırken hata oluştu.", error);
    }
  };

  const fetchCities = async () => {
    try {
      const result = await CityService.getByFilter(0, 81);
      setCities(result.data.items);
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };

  const handleCityId = async (cityId: number) => {
    try {
      const result = await CityService.getDistrictsBySelectedCityId(cityId);
      setDistricts(result.data.districts);
    } catch (error) {
      console.error("API isteği sırasında bir hata oluştu:", error);
    }
  };

  useEffect(() => {
    fetchCities();
    getUser(1);
  }, []);

  const initialValues: ProfileDto = {
    id: 0,
    firstname: "",
    lastname: "",
    email: "",
    status: false,
  };

  return (
    <div className="container mt-5">
      <div className="information-photo-cont">
        <Image
          src={process.env.PUBLIC_URL + "/images/pp.png"}
          roundedCircle
          style={{ width: "100%" }}
        />
      </div>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        enableReinitialize={true}
        onSubmit={(values) => {}}
      >
        <Form>
          <Container>
            <Row>
              <Col>
                <FormikInput
                  type="text"
                  name="firstName"
                  label="Adınız"
                  placeHolder={profileData?.firstName || "Adınız"}
                />
              </Col>
              <Col>
                <FormikInput
                  type="text"
                  name="lastName"
                  label="Soyadınız"
                  placeHolder={profileData?.lastName || "Soyadınız"}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <Row style={{ display: "flex", alignItems: "center" }}>
                  <Col className="col-1">
                    {/* <select style={{ width: "fit-content", height: "fit-content" }}> */}
                    {/* <Field as="select" name="value" className="form-control">a
                      <option value="" disabled selected>Seçiniz</option>

                    </Field> */}
                    {/* </select> */}

                    {/* <Field as="select" name="value" className="form-control">
                      {countries.map((country: any) => (
                        <option
                          key={country.name}
                          value={country.name}
                          label={country.name}
                        />
                      ))}
                    </Field> */}
                  </Col>
                  <Col className="col-11">
                    <FormikInput
                      type="number"
                      name="phone"
                      label="Telefon"
                      placeHolder="Telefon Numaranız"
                    />
                  </Col>
                </Row>
              </Col>
              <Col>
                <FormikInput
                  type="date"
                  name="birthdate"
                  label="Doğum Tarihiniz*"
                  placeHolder="Doğum tarihiniz"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormikInput
                  type="number"
                  name="identityNumber"
                  label="TC Kimlik No*"
                  placeHolder="TC Kimlik No"
                />
              </Col>
              <Col>
                <FormikInput
                  type="email"
                  name="email"
                  label="E-posta*"
                  placeHolder={profileData?.email || "E-Posta"}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <FormikInput
                  type="text"
                  name="country"
                  label="Ülke*"
                  placeHolder="Ülke"
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label className="input-label-text">Şehir Seçiniz*</label>
                <SelectBox
                  defaultText="İl Seçiniz*"
                  selectBoxArray={cities}
                  onCitySelect={handleCityId}
                />
              </Col>
              <Col>
                <label className="input-label-text">İlçe Seçiniz*</label>
                <SelectBox
                  defaultText="İlçe Seçiniz*"
                  selectBoxArray={districts}
                />
              </Col>
            </Row>
            <Row>
              <Col>
                <label className="input-label-text" htmlFor="street">
                  Mahalle / Sokak
                </label>
                <Field
                  className="form-control my-custom-input textarea-style"
                  rows="10"
                  as="textarea"
                  id="street"
                  name="street"
                ></Field>
              </Col>
            </Row>
            <Row>
              <Col>
                <label className="input-label-text" htmlFor="aboutMe">
                  Hakkımda
                </label>
                <Field
                  className="form-control my-custom-input textarea-style"
                  rows="5"
                  as="textarea"
                  id="aboutMe"
                  name="aboutMe"
                ></Field>
              </Col>
            </Row>
            <Row>
              <label>
                <Field type="checkbox" name="checked" value="One" />
                Devam Ediyorum
              </label>
            </Row>
            <button
              type="submit"
              className="button-save py-2 mb-3 mt-4 d-inline-block "
            >
              Kaydet
            </button>
          </Container>
        </Form>
      </Formik>
    </div>
  );
};

export default ProfileInformationEdit2;
