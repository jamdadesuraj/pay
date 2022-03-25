import React from "react";

const Contact = () => {
  return (
    <>
      <section className="contact_section">
        <div className="container main_contact_container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-6">
              <div class="row g-3">
                <div class="col">
                  <input
                    type="text"
                    class="form-control p-3"
                    placeholder="First name"
                    aria-label="First name"
                    required
                  />
                </div>
                <div class="col">
                  <input
                    type="text"
                    class="form-control p-3"
                    placeholder="Last name"
                    aria-label="Last name"
                    required
                  />
                </div>
                <form class="row g-3">
                  <div class="col-md-6">
                    <label for="inputEmail4" class="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      class="form-control p-3"
                      id="inputEmail4"
                      placeholder="emails"
                      required
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="inputPassword4" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control p-3"
                      id="inputPassword4"
                    />
                  </div>
                  <div class="col-12">
                    <label for="inputAddress" class="form-label">
                      Address
                    </label>
                    <input
                      type="text"
                      class="form-control p-3"
                      id="inputAddress"
                      placeholder="1234 Main St"
                    />
                  </div>
                  <div class="col-12">
                    <label for="inputAddress2" class="form-label">
                      Address 2
                    </label>
                    <input
                      type="text"
                      class="form-control p-3"
                      id="inputAddress2"
                      placeholder="Apartment, studio, or floor"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="inputCity" class="form-label">
                      City
                    </label>
                    <input
                      type="text"
                      class="form-control p-3"
                      id="inputCity"
                      placeholder="city"
                      required
                    />
                  </div>
                  <div class="col-md-4">
                    <label for="inputState" class="form-label">
                      State
                    </label>
                    <select id="inputState" class="form-select p-3">
                      <option selected>Amaravati</option>
                      <option>Arunachal Pradesh</option>
                      <option>Assam</option>
                      <option>Chandigarh</option>
                      <option>Andhra Pradesh</option>
                      <option> Bihar</option>
                      <option> Chhattisgarh</option>
                      <option> Goa</option>
                      <option> Gujarat</option>
                      <option> Haryana</option>
                      <option> Himachal Pradesh</option>
                      <option> Jammu and Kashmir</option>
                      <option> Jharkhand</option>
                      <option>Maharastra</option>
                      <option>Madhya Pradesh</option>
                    </select>
                  </div>
                  <div class="col-md-2">
                    <label for="inputZip" class="form-label">
                      Zip
                    </label>
                    <input type="text" class="form-control p-3" id="inputZip" />
                  </div>
                  <div class="col-12">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        id="gridCheck"
                      />
                      <label class="form-check-label" for="gridCheck">
                        I agree all information is true
                      </label>
                    </div>
                  </div>
                  <div class="d-grid gap-2">
                    <button class="btn btn-primary rounded-4" type="button">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
