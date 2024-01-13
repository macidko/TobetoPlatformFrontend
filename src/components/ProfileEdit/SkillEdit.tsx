import { Field, Form, Formik } from 'formik'
import React from 'react'
import { Button, Card } from 'react-bootstrap'

type Props = {}


const SkillEdit = (props: Props) => {
  const initialValues = {

  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <Field as="select" name="value" className="form-control">
            <option selected disabled>Seçiniz</option>
            <option>Yetkinlik1</option>
            <option>Yetkinlik2</option>
            <option>Yetkinlik3</option>
            <option>Yetkinlik4</option>
          </Field>
          <button type="submit" className="button-save py-2 mb-3 mt-4 d-inline-block ">
            Kaydet
          </button>
        </Form>
      </Formik>
      <Card className='inline-card'>
        <Card.Body className='inline-card-body'>
          This is some text within a card body.
          <Button variant='danger' className='delete-btn'>
            <img src={process.env.PUBLIC_URL + "/images/trash.svg"} className='trash-icon' />
          </Button>
        </Card.Body>
      </Card>
      <Card className='inline-card'>
        <Card.Body className='inline-card-body'>
          This is some text within a card body.
          <Button variant='danger' className='delete-btn'>
            <img src={process.env.PUBLIC_URL + "/images/trash.svg"} className='trash-icon' />
          </Button>
        </Card.Body>
      </Card>
      <Card className='inline-card'>
        <Card.Body className='inline-card-body'>
          This is some text within a card body.
          <Button variant='danger' className='delete-btn'>
            <img src={process.env.PUBLIC_URL + "/images/trash.svg"} className='trash-icon' />
          </Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default SkillEdit