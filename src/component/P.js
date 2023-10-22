import { useState, useEffect } from "react";
import "./P.css";

function P() {
  const initialValues = { tingkat: "", namaTim: "", namaSekolahKampus: "", namaGuruDosenPembimbing : "",
  noTeleponGuruDosenPembimbing : '',   };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.tingkat) {
      errors.tingkat = "Username is required!";
    }
    if (!values.namaTim) {
      errors.namaTim = "";
    } else if (!regex.test(values.namaTim)) {
      errors.namaTim = "This is not a valid namaTim format!";
    }
    if (!values.namaSekolahKampus) {
      errors.namaSekolahKampus = "Password is required";
    } else if (values.namaSekolahKampus.length < 4) {
      errors.namaSekolahKampus = "Password must be more than 4 characters";
    } else if (values.namaSekolahKampus.length > 10) {
      errors.namaSekolahKampus = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}

      <form onSubmit={handleSubmit}>
        <h1>Login Form</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="field">
            <label>Tingkat</label>
            <input
              type="text"
              name="tingkat"
              placeholder="Username"
              value={formValues.tingkat}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.tingkat}</p>
          <div className="field">
            <label>tim</label>
            <input
              type="text"
              name="namaTim"
              placeholder="Email"
              value={formValues.namaTim}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.namaTim}</p>
          <div className="field">
            <label>Sekolah</label>
            <input
              type="namaSekolahKampus"
              name="namaSekolahKampus"
              placeholder="Password"
              value={formValues.namaSekolahKampus}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>Nama guru dosen</label>
            <input
              type="namaGuruDosenPembimbing"
              name="namaGuruDosenPembimbing"
              placeholder="namaGuruDosenPembimbing"
              value={formValues.namaGuruDosenPembimbing}
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label>Password</label>
            <input
              type="namaSekolahKampus"
              name="namaSekolahKampus"
              placeholder="Password"
              value={formValues.namaSekolahKampus}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.namaSekolahKampus}</p>
          <button className="fluid ui button blue">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default P;