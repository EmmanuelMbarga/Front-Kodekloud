function FooterApp() {
  return (
    <>
      <div className="flex justify-evenly mt-16">
        {/* <div className="grid grid-cols-6 -gap-10 mt-16"> */}
        <div>
          <h1>LEARNING PATHS</h1>
          <ul>
            <li>DevOps</li>
            <li>Kubernetes</li>
            <li>Linux</li>
            <li>Docker</li>
            <li>IaC</li>
            <li>AWS</li>
            <li>GCP</li>
            <li>Azure</li>
          </ul>
        </div>

        <div>
          <h1>COURSES</h1>
          <ul>
            <li>Certified Kubernetes Administrator</li>
            <li>Certified Kubernetes Application Developer</li>
            <li>Certified Kubernetes Security Specialist</li>
            <li>AWS Cloud Practitioner</li>
            <li>Microsoft Azure Solutions Architect Expert</li>
            <li>Microsoft Azure Administrator</li>
          </ul>
        </div>

        <div>
          <h1> COMMUNITY</h1>
          <ul>
            <li>Join our community</li>
            <li>Teach with Us</li>
            <li>Write with Us</li>
            <li>Ambassadors</li>
            <li>Academia</li>
            <li>Affiliates</li>
          </ul>
        </div>

        <div>
          <h1> ABOUT</h1>
          <ul>
            <li>About Us</li>
            <li>Success Stories</li>
            <li>Our Values</li>
            <li>Careers at KodeKloud</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Business Terms of Service</li>
          </ul>
        </div>
        <div>
          <h1> HELP</h1>
          <ul>
            <li>Contact Us</li>
            <li>Support</li>
            <li>Give us feedback</li>
            <li>Request a Course</li>
          </ul>
        </div>
        <div>
          <h1>YOUR ACCOUNT</h1>
          <ul>
            <li>Sign In</li>
            <li>Register</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-around mt-14 mx-20">
        <div className="grid grid-cols-3 items-end gap-6">
          <p>@2024</p>
          <p>KodeKloud.com</p>
          <p>All Rights Reserved</p>
        </div>

        <div className="w-40 items-stretch">
          <div className="mb-16">
            <p>
              <img
                src="https://res.cloudinary.com/kodekloud/image/upload/v1698643790/webflow/631f022194d7ef36d9303cbb_Horizontal.svg"
                alt="Kodekloud"
              />
            </p>
            <p className="text-xs">
              Zaurac Technologies Pte Ltd 14 Robinson Road #08-01A Singapore
              048545
            </p>
          </div>
          <div className="flex">
            <p>
              <img
                src="https://assets-global.website-files.com/62a8969da1ab561666c8c408/65279f2408829608b7351dfd_svgviewer-output%20(9).svg"
                alt=""
                className="w-5 h-5 mr-10"
              />
            </p>
            <p>
              <img
                src="https://assets-global.website-files.com/62a8969da1ab561666c8c408/65279f90a0fa0662d126b624_svgviewer-output%20(11).svg"
                alt=""
                className="w-5 h-5 mr-10"
              />
            </p>
            <p>
              <img
                src="https://assets-global.website-files.com/62a8969da1ab561666c8c408/65279f902546312f9477fb28_svgviewer-output%20(10).svg"
                alt=""
                className="w-5 h-5 mr-10"
              />
            </p>
            <p>
              <img
                src="https://assets-global.website-files.com/62a8969da1ab561666c8c408/65279f907a8eb1c40542f8f3_svgviewer-output%20(13).svg"
                alt=""
                className="w-5 h-5 mr-10"
              />
            </p>
            <p>
              <img
                src="https://assets-global.website-files.com/62a8969da1ab561666c8c408/65279fc04413d08cdc12dbf8_svgviewer-output%20(12).svg"
                alt=""
                className="w-6 h-6 mr-10"
              />
            </p>

            <p>
              <img
                src="https://assets-global.website-files.com/62a8969da1ab561666c8c408/6527a05b7a8eb1c4054417d3_instagram-threads.svg"
                alt=""
                className="w-5 h-5 mr-10"
              />
            </p>
            <p>
              <img
                src="https://assets-global.website-files.com/62a8969da1ab561666c8c408/65813df3a229aefed9803619_reddit-svgrepo-com.svg"
                alt=""
                className="w-5 h-5 mr-10"
              />
            </p>
            <p>
              <img
                src="https://assets-global.website-files.com/62a8969da1ab561666c8c408/65813e4b23e0ec649f23f8df_discourse-svgrepo-com.svg"
                alt=""
                className="w-5 h-5"
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterApp;
