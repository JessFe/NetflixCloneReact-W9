import React from "react";
import { Dropdown, Button } from "react-bootstrap";

function ProfilePage() {
  return (
    <div className="bg-darkNetflix text-light pt-custom">
      <main className="container my-4">
        <section id="profile">
          <div className="row">
            <div className="col"></div>
            <div className="col-10 col-md-8 col-lg-6 col-xl-5 col-xxl-4 px-0">
              <h4 className="mb-0">Edit Profile</h4>
              <hr />
              <div className="row g-3 mb-4">
                <div className="col-3">
                  <img className="img-fluid" src="./assets/avatar.png" alt="avatar" />
                </div>
                <div className="col-9">
                  <p className="bg-secondary py-1 px-3 fs-5">Strive Student</p>
                  <p className="text-secondary fs-5 pt-2 mb-1">Language:</p>

                  <Dropdown as={Button.Group}>
                    <Dropdown.Toggle
                      variant="dark"
                      id="dropdown-language"
                      className="bg-transparent border border-secondary rounded-0 py-1 px-2"
                    >
                      English
                    </Dropdown.Toggle>

                    <Dropdown.Menu className="dropdown-menu-dark dropdown-menu-end bg-darkgray border-secondary">
                      <Dropdown.Item href="#" className="custom-dropdown-item">
                        Language 1
                      </Dropdown.Item>
                      <Dropdown.Item href="#" className="custom-dropdown-item">
                        Language 2
                      </Dropdown.Item>
                      <Dropdown.Item href="#" className="custom-dropdown-item">
                        Language 3
                      </Dropdown.Item>
                      <Dropdown.Item href="#" className="custom-dropdown-item">
                        Language 4
                      </Dropdown.Item>
                      <Dropdown.Item href="#" className="custom-dropdown-item">
                        Language 5
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                  <hr />
                  <p className="text-secondary fs-5 mb-2">Maturity Settings:</p>
                  <p className="bg-light bg-opacity-10 d-inline-block text-uppercase py-1 px-3">All maturity ratings</p>
                  <p>Show titles of all maturity ratings for this profile.</p>
                  <a
                    className="border border-1 border-secondary d-inline-block page-link link-secondary text-uppercase py-1 px-3 mb-2"
                    href="#"
                  >
                    Edit
                  </a>
                  <hr />
                  <p className="text-secondary fs-5 mb-0">Autoplay controls</p>
                  <div className="d-flex align-items-center">
                    <input className="form-check-input" type="checkbox" id="autonext" />
                    <label className="form-check-label ps-2" htmlFor="autonext">
                      Autoplay next episode in a series on all devices.
                    </label>
                  </div>
                  <div className="d-flex align-items-center">
                    <input className="form-check-input" type="checkbox" id="autoprev" />
                    <label className="form-check-label ps-2" htmlFor="autoprev">
                      Autoplay previews while browsing on all devices.
                    </label>
                  </div>
                </div>
              </div>
              <hr />
              <a
                className="border border-1 border-secondary d-inline-block page-link link-secondary fs-6 text-uppercase bg-white text-black py-1 px-4 me-sm-3 mt-2 d-block d-sm-inline-block"
                href="#"
              >
                Save
              </a>
              <a
                className="border border-1 border-secondary d-inline-block page-link link-secondary fs-6 text-uppercase py-1 px-4 me-sm-3 mt-2 d-block d-sm-inline-block"
                href="./index.html"
              >
                Cancel
              </a>
              <a
                className="border border-1 border-secondary d-inline-block page-link link-secondary fs-6 text-uppercase py-1 px-4 mt-2 d-block d-sm-inline-block"
                href="#"
              >
                Delete profile
              </a>
            </div>
            <div className="col"></div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default ProfilePage;
