const React = require("react");

function PlantResult({
    plant,
  image,
  diseases,
  diagnosis,
  selectedSymptoms = []
}) {

  return (

    <html>

      <head>

        <title>AI Plant Doctor</title>

        <link
          rel="stylesheet"
          href="/plantDoctor.css"
        />

      </head>

      <body>

        <div className="doctor-page">

          <div className="top-box">

            <h1>
              🌿 Plant Detected
            </h1>

            <h2 className="plant-name">
  🌱 {plant}
</h2>

            {/* {
  image && (
    <img
      src={image}
      className="plant-image"
      alt="Uploaded Plant"
    />
  )
} */}

          </div>

          <form
            action="/final-diagnosis"
            method="POST"
          >

            <input
              type="hidden"
              name="plant"
              value={plant}
            />
            <input
  type="hidden"
  name="image"
  value={image}
/>

            <h2 className="symptom-heading">
              Select Symptoms
            </h2>

            <div className="symptom-grid">

              {
                diseases.map((disease) => (

                  disease.symptoms.map((symptom, index) => (

                    <label
                      className="symptom-card"
                      key={index}
                    >

                      <input
  type="checkbox"
  name="symptoms"
  value={symptom}
  defaultChecked={
    selectedSymptoms.includes(symptom)
  }
/>

                      <span>
                        {symptom}
                      </span>

                    </label>

                  ))

                ))
              }

            </div>

            <button
              type="submit"
              className="diagnose-btn"
            >

              Get Treatment

            </button>

          </form>

          {
  diagnosis && (

    <div className="diagnosis-box">

      <h1>
        🩺 Disease Found
      </h1>

      {
        diagnosis.map((disease, index) => (

          <div key={index} className="info-section">

            <h2>
              {disease.diseaseName}
            </h2>

            <div className="severity">
              Severity:
              {disease.severity}
            </div>

            <div className="info-section">

              <h3>
                Causes
              </h3>

              <ul>

                {
                  disease.causes.map((c, i) => (

                    <li key={i}>
                      {c}
                    </li>

                  ))
                }

              </ul>

            </div>

            <div className="info-section">

              <h3>
                Treatment
              </h3>

              <ul>

                {
                  disease.treatments.map((t, i) => (

                    <li key={i}>
                      {t}
                    </li>

                  ))
                }

              </ul>

            </div>

            <div className="info-section">

              <h3>
                Prevention
              </h3>

              <ul>

                {
                  disease.prevention.map((p, i) => (

                    <li key={i}>
                      {p}
                    </li>

                  ))
                }

              </ul>

            </div>

            <hr />

          </div>

        ))
      }

    </div>

  )
}

        </div>

      </body>

    </html>

  );

}

module.exports = PlantResult;