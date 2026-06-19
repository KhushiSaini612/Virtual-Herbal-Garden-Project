const React = require("react");

function Diagnosis({ problems = [] }) {
  return (
    <html>
      <head>
        <title>Herbal Diagnosis</title>

        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500;700&display=swap" rel="stylesheet"/>
        <link rel="stylesheet" href="/diagnosis.css" />
      </head>

      <body>

        <div className="container">

          <h1 className="title">🌿 Herbal Diagnosis</h1>
          <p className="subtitle">Select your problem & age group</p>

          {/* DROPDOWN */}
          <div className="input-box">
            <select id="problem" className="dropdown">
              <option value="">-- Select Problem --</option>

              {problems.map((p, index) => (
                <option key={index} value={p}>
                  {p.toUpperCase()}
                </option>
              ))}

            </select>
          </div>

          {/* AGE CARDS */}
          <div className="age-cards">

            <div className="card" data-age="child">👶 Child</div>
            <div className="card" data-age="adult">🧑 Adult</div>
            <div className="card" data-age="old">👴 Old</div>

          </div>

          <button className="btn" id="diagnosisBtn">
            Check Remedies
          </button>

          <div id="result" className="result-box"></div>

        </div>

        <script src="/script.js"></script>
      </body>
    </html>
  );
}

module.exports = Diagnosis;