const React = require("react");

function PlantDoctor() {

  return (

    <html>

      <head>

        <title>
          AI Plant Disease Detection
        </title>

        <link
          rel="stylesheet"
          href="/plantDoctorUpload.css"
        />

      </head>

      <body>

        <div className="upload-page">

          <div className="upload-card">

            <h1>
              🌿 AI Plant Disease Detection
            </h1>

            <p>
              Upload or capture plant image
            </p>

            <form
  id="plantForm"
  action="/predict-plant"
  method="POST"
  encType="multipart/form-data"
>

  <div className="button-group">

    <label
      className="upload-btn"
      htmlFor="fileInput"
    >

      📁 Choose File

    </label>

    <button
      type="button"
      className="upload-btn"
      id="cameraBtn"
    >

      📸 Open Camera

    </button>

    <input
      type="file"
      name="plantImage"
      id="fileInput"
      accept="image/*"
      hidden
      required
    />

  </div>

  <div
    id="cameraContainer"
    style={{
      display: "none"
    }}
  >

    <video
      id="camera"
      autoPlay
      playsInline
      className="camera-video"
    ></video>

    <button
      type="button"
      id="captureBtn"
      className="capture-btn"
    >

      Capture Image

    </button>

    <canvas
      id="canvas"
      style={{
        display: "none"
      }}
    ></canvas>

  </div>

  <div
    id="previewBox"
    className="preview-box"
  >

    <img
      id="previewImage"
      src=""
      alt=""
    />

  </div>

  <button
    type="submit"
    className="detect-btn"
  >

    Detect Plant

  </button>

</form>
          </div>
        </div>

        <div id="loaderOverlay">

          <div className="loader-box">

            <div className="spinner"></div>

            <h2>
              🌿 Detecting Plant Disease...
            </h2>

            <p>
              AI is analyzing image
            </p>

          </div>

        </div>

        <script
  dangerouslySetInnerHTML={{
    __html: `

      const fileInput =
      document.getElementById("fileInput");

      const previewImage =
      document.getElementById("previewImage");

      const previewBox =
      document.getElementById("previewBox");

      const cameraBtn =
      document.getElementById("cameraBtn");

      const cameraContainer =
      document.getElementById("cameraContainer");

      const video =
      document.getElementById("camera");

      const captureBtn =
      document.getElementById("captureBtn");

      const canvas =
      document.getElementById("canvas");

      const loader =
      document.getElementById("loaderOverlay");

      const plantForm =
      document.getElementById("plantForm");

      let stream;

      function showPreview(file){

        const reader =
        new FileReader();

        reader.onload = function(e){

          previewImage.src =
          e.target.result;

          previewBox.style.display =
          "block";

        }

        reader.readAsDataURL(file);

      }

      fileInput.addEventListener(
        "change",
        function(){

          const file =
          this.files[0];

          if(file){

            showPreview(file);

          }

        }
      );

      cameraBtn.addEventListener(
        "click",
        async function(){

          try{

            stream =
            await navigator.mediaDevices.getUserMedia({
              video: true
            });

            video.srcObject =
            stream;

            cameraContainer.style.display =
            "block";

          }

          catch(err){

            alert(
              "Camera access denied or not supported"
            );

            console.log(err);

          }

        }
      );

      captureBtn.addEventListener(
        "click",
        async function(){

          canvas.width =
          video.videoWidth;

          canvas.height =
          video.videoHeight;

          const ctx =
          canvas.getContext("2d");

          ctx.drawImage(
            video,
            0,
            0
          );

          canvas.toBlob(function(blob){

            const file =
            new File(
              [blob],
              "captured-image.png",
              {
                type: "image/png"
              }
            );

            const dataTransfer =
            new DataTransfer();

            dataTransfer.items.add(file);

            fileInput.files =
            dataTransfer.files;

            showPreview(file);

          });

          stream.getTracks().forEach(
            track => track.stop()
          );

          cameraContainer.style.display =
          "none";

        }
      );

      plantForm.addEventListener(
        "submit",
        function(){

          loader.style.display =
          "flex";

        }
      );

    `
  }}
/>

      </body>

    </html>

  );

}

module.exports = PlantDoctor;