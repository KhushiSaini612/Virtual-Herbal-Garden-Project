const mongoose = require("mongoose");
const { PlantDisease } = require("./src/mongo");

const diseases = [

{
  plantName: "Tulsi",

  diseaseName: "Leaf Spot",

  symptoms: [
    "Brown spots on leaves",
    "Yellowing around spots",
    "Leaves drying slowly",
    "Spots increasing daily"
  ],

  causes: [
    "Fungal infection",
    "Excess moisture",
    "Poor air circulation"
  ],

  treatments: [
    "Remove infected leaves",
    "Avoid overwatering",
    "Spray neem oil weekly",
    "Keep plant in sunlight"
  ],

  prevention: [
    "Do not wet leaves frequently",
    "Maintain airflow",
    "Use clean soil"
  ],

  severity: "Medium",

  imageUrl:
    "https://gardenerspath.com/wp-content/uploads/2021/08/Basil-Leaf-Spot.jpg"
},

{
  plantName: "Tulsi",

  diseaseName: "Root Rot",

  symptoms: [
    "Leaves turning yellow",
    "Soft black roots",
    "Bad smell from soil",
    "Plant wilting"
  ],

  causes: [
    "Overwatering",
    "Waterlogged soil",
    "Fungal growth in roots"
  ],

  treatments: [
    "Stop watering temporarily",
    "Change soil immediately",
    "Trim rotten roots",
    "Repot in dry soil"
  ],

  prevention: [
    "Use drainage pots",
    "Water only when soil dries"
  ],

  severity: "High",

  imageUrl:
    "https://extension.umn.edu/sites/extension.umn.edu/files/root-rot.jpg"
},

{
  plantName: "Tulsi",

  diseaseName: "Powdery Mildew",

  symptoms: [
    "White powder on leaves",
    "Leaves curling",
    "Slow growth",
    "Dry appearance"
  ],

  causes: [
    "Fungal infection",
    "Humidity",
    "Poor sunlight"
  ],

  treatments: [
    "Spray baking soda solution",
    "Keep in direct sunlight",
    "Remove infected leaves"
  ],

  prevention: [
    "Avoid overcrowding",
    "Maintain sunlight"
  ],

  severity: "Medium",

  imageUrl:
    "https://www.almanac.com/sites/default/files/styles/or/public/image_nodes/powdery-mildew.jpg"
},
{
  plantName: "Neem",

  diseaseName: "Leaf Blight",

  symptoms: [
    "Brown dry patches",
    "Leaf edges burning",
    "Leaves falling early"
  ],

  causes: [
    "Fungal attack",
    "High humidity"
  ],

  treatments: [
    "Remove infected leaves",
    "Apply fungicide",
    "Increase airflow"
  ],

  prevention: [
    "Avoid excess watering"
  ],

  severity: "Medium",

  imageUrl:
    "https://plantvillage-production-new.s3.amazonaws.com/pictures/images/000/001/234/original/leaf_blight.jpg"
},

{
  plantName: "Neem",

  diseaseName: "Sooty Mold",

  symptoms: [
    "Black powder layer on leaves",
    "Sticky leaves",
    "Reduced photosynthesis"
  ],

  causes: [
    "Insects secreting honeydew",
    "Fungal growth"
  ],

  treatments: [
    "Wash leaves gently",
    "Use neem oil spray",
    "Remove insects"
  ],

  prevention: [
    "Control aphids regularly"
  ],

  severity: "Low",

  imageUrl:
    "https://www.gardeningknowhow.com/wp-content/uploads/2020/12/sooty-mold.jpg"
},
{
  plantName: "Aloe Vera",

  diseaseName: "Aloe Rust",

  symptoms: [
    "Brown circular spots",
    "Orange rust marks",
    "Dry leaves"
  ],

  causes: [
    "Fungal infection",
    "Humid weather"
  ],

  treatments: [
    "Remove affected leaves",
    "Reduce watering",
    "Use fungicide spray"
  ],

  prevention: [
    "Avoid excessive humidity"
  ],

  severity: "Medium",

  imageUrl:
    "https://gardenerspath.com/wp-content/uploads/2021/05/Aloe-Rust.jpg"
},

{
  plantName: "Aloe Vera",

  diseaseName: "Soft Rot",

  symptoms: [
    "Soft mushy stem",
    "Foul smell",
    "Leaves collapsing"
  ],

  causes: [
    "Overwatering",
    "Bacterial infection"
  ],

  treatments: [
    "Remove infected area",
    "Repot in dry soil",
    "Reduce watering"
  ],

  prevention: [
    "Proper drainage",
    "Avoid standing water"
  ],

  severity: "High",

  imageUrl:
    "https://succulentplantcare.com/wp-content/uploads/2019/08/aloe-soft-rot.jpg"
},
{
  plantName: "Brahmi",

  diseaseName: "Leaf Yellowing",

  symptoms: [
    "Yellow leaves",
    "Weak stems",
    "Slow growth"
  ],

  causes: [
    "Nutrient deficiency",
    "Poor sunlight"
  ],

  treatments: [
    "Use organic fertilizer",
    "Increase sunlight exposure"
  ],

  prevention: [
    "Regular fertilization"
  ],

  severity: "Low",

  imageUrl:
    "https://plantcaretoday.com/wp-content/uploads/yellow-leaves.jpg"
}

];
async function seedDisease() {

  try {

    await mongoose.connect(
      "mongodb+srv://sainikhushi007:FEcIKbrGLe8FDZ33@clustervhg.sy34kax.mongodb.net/Virtual_Herbal_Garden"
    );

    await PlantDisease.deleteMany({});

    await PlantDisease.insertMany(diseases);

    console.log("Disease data inserted");

    mongoose.connection.close();

  } catch (err) {
    console.log(err);
  }
}

seedDisease();