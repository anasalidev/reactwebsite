import React, { useState } from "react";

const Contact = () => {
  const [data, setDate] = useState({
    fullname: '',
    phone: "",
    email: "",
    massage: ""
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;
    setDate((perVal) => {
      return {
        ...perVal,
        [name]: value,
      }
    })
  }
  const formSubmit = (e) => {
    e.preventDefault();
    alert(`${data.fullname}`)

  }
  return (
    <>
      <div className="my-4">
        <h1 className="text-center" >Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            {/* ===== */}
            <form onSubmit={formSubmit}>


              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Enter your name</label>
                <input type="text"
                  className="form-control"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  id="exampleFormControlInput1"
                  placeholder="Enter your name" />
              </div>
              {/* ========== */}
              {/* ===== */}
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">phone</label>
                <input type="number"
                  className="form-control"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  id="exampleFormControlInput1"
                  placeholder="phone number" />
              </div>
              {/* ========== */}
              {/* ===== */}
              <div className="mb-3">
                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                <input type="email"
                  className="form-control"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  id="exampleFormControlInput1"
                  placeholder="name@example.com" />
              </div>
              {/* ========== */}
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" className="form-label">Massage</label>
                <textarea className="form-control"
                  name="massage"
                  value={data.massage}
                  onChange={InputEvent}
                  id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-primary" type="submit">Submit form</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )

}

export default Contact;

