const mongoose = require("mongoose");
const { HerbalPlan } = require("./src/mongo");

const plans = [

  // ================= COUGH =================
  {
    problem: "cough",
    ageGroup: "child",
    remedies: [
      {
        plant: "Tulsi",
        method: "Tulsi Tea",
        steps: [
          "Take 3-4 tulsi leaves",
          "Boil 1 cup water",
          "Add leaves and boil for 5 minutes",
          "Cool and strain"
        ],
        time: "Morning",
        dosage: "Half cup",
        benefit: "Relieves cough"
      },
      {
        plant: "Honey",
        method: "Honey with warm water",
        steps: [
          "Take 1 tsp honey",
          "Mix in lukewarm water",
          "Give slowly"
        ],
        time: "Night",
        dosage: "1 tsp",
        benefit: "Soothes throat"
      }
    ]
  },

  {
    problem: "cough",
    ageGroup: "adult",
    remedies: [
      {
        plant: "Ginger",
        method: "Ginger Tea",
        steps: [
          "Crush ginger",
          "Boil in water",
          "Drink warm"
        ],
        time: "Morning",
        dosage: "1 cup",
        benefit: "Reduces cough"
      },
      {
        plant: "Turmeric",
        method: "Haldi Milk",
        steps: [
          "Heat milk",
          "Add 1/2 tsp turmeric",
          "Drink warm"
        ],
        time: "Night",
        dosage: "1 glass",
        benefit: "Fights infection"
      }
    ]
  },

  {
    problem: "cough",
    ageGroup: "old",
    remedies: [
      {
        plant: "Tulsi",
        method: "Tulsi Juice",
        steps: [
          "Crush tulsi leaves",
          "Extract juice",
          "Mix with warm water"
        ],
        time: "Morning",
        dosage: "1 tsp",
        benefit: "Improves breathing"
      }
    ]
  },

  // ================= COLD =================
  {
    problem: "cold",
    ageGroup: "child",
    remedies: [
      {
        plant: "Steam",
        method: "Steam Inhalation",
        steps: [
          "Boil water",
          "Let child inhale steam carefully"
        ],
        time: "Evening",
        dosage: "5 min",
        benefit: "Clears nose"
      },
      {
        plant: "Honey",
        method: "Honey",
        steps: [
          "Give 1 tsp honey"
        ],
        time: "Night",
        dosage: "1 tsp",
        benefit: "Soothes throat"
      }
    ]
  },

  {
    problem: "cold",
    ageGroup: "adult",
    remedies: [
      {
        plant: "Tulsi",
        method: "Tulsi Tea",
        steps: [
          "Boil water",
          "Add tulsi leaves",
          "Drink warm"
        ],
        time: "Morning",
        dosage: "1 cup",
        benefit: "Relieves cold"
      },
      {
        plant: "Steam",
        method: "Steam Inhalation",
        steps: [
          "Boil water",
          "Inhale steam"
        ],
        time: "Night",
        dosage: "10 min",
        benefit: "Opens nose"
      }
    ]
  },

  {
    problem: "cold",
    ageGroup: "old",
    remedies: [
      {
        plant: "Ginger",
        method: "Ginger Tea",
        steps: [
          "Boil ginger in water",
          "Drink warm"
        ],
        time: "Morning",
        dosage: "Half cup",
        benefit: "Warms body"
      }
    ]
  },

  // ================= FEVER =================
  // ================= FEVER =================

//  CHILD
{
  problem: "fever",
  ageGroup: "child",
  remedies: [
    {
      plant: "Tulsi",
      method: "Mild Tulsi Water",
      steps: [
        "Take 2-3 tulsi leaves",
        "Boil in 1 cup water",
        "Cool properly",
        "Give in small sips"
      ],
      time: "Morning",
      dosage: "Few sips",
      benefit: "Helps reduce mild fever safely"
    },
    {
      plant: "Sponge",
      method: "Cold Sponge",
      steps: [
        "Dip cloth in normal water",
        "Wipe child's body gently",
        "Repeat every 30 minutes"
      ],
      time: "Anytime",
      dosage: "As needed",
      benefit: "Reduces body temperature"
    }
  ]
},

//  ADULT (already)
{
  problem: "fever",
  ageGroup: "adult",
  remedies: [
    {
      plant: "Tulsi",
      method: "Tulsi Decoction",
      steps: [
        "Boil tulsi leaves in water",
        "Drink warm"
      ],
      time: "Morning",
      dosage: "1 cup",
      benefit: "Reduces fever naturally"
    },
    {
      plant: "Turmeric",
      method: "Haldi Milk",
      steps: [
        "Add 1/2 tsp turmeric in milk",
        "Drink warm before sleep"
      ],
      time: "Night",
      dosage: "1 glass",
      benefit: "Fights infection"
    }
  ]
},

//  OLD
{
  problem: "fever",
  ageGroup: "old",
  remedies: [
    {
      plant: "Ginger",
      method: "Light Ginger Tea",
      steps: [
        "Boil small ginger piece in water",
        "Strain and drink warm"
      ],
      time: "Morning",
      dosage: "Half cup",
      benefit: "Improves body warmth and recovery"
    },
    {
      plant: "Tulsi",
      method: "Tulsi Water",
      steps: [
        "Boil tulsi leaves",
        "Drink lukewarm"
      ],
      time: "Evening",
      dosage: "Half cup",
      benefit: "Boosts immunity in elderly"
    }
  ]
},

  // ================= DIGESTION =================
  {
    problem: "digestion",
    ageGroup: "child",
    remedies: [
      {
        plant: "Ajwain",
        method: "Ajwain Water",
        steps: [
          "Boil ajwain in water",
          "Cool and give"
        ],
        time: "After meal",
        dosage: "Few sips",
        benefit: "Improves digestion"
      }
    ]
  },

  {
    problem: "digestion",
    ageGroup: "adult",
    remedies: [
      {
        plant: "Ginger",
        method: "Ginger Juice",
        steps: [
          "Extract juice",
          "Drink"
        ],
        time: "Before meal",
        dosage: "1 tsp",
        benefit: "Boost digestion"
      },
      {
        plant: "Jeera",
        method: "Jeera Water",
        steps: [
          "Boil cumin seeds",
          "Drink warm"
        ],
        time: "Morning",
        dosage: "1 glass",
        benefit: "Improves metabolism"
      }
    ]
  },
  {
  problem: "digestion",
  ageGroup: "old",
  remedies: [
    {
      plant: "Jeera",
      method: "Jeera Water",
      steps: [
        "Take 1 tsp cumin seeds",
        "Boil in 1 glass water",
        "Strain and drink lukewarm"
      ],
      time: "Morning",
      dosage: "Half glass",
      benefit: "Improves digestion and reduces gas"
    },
    {
      plant: "Ajwain",
      method: "Ajwain Water",
      steps: [
        "Boil 1/2 tsp ajwain in water",
        "Cool slightly",
        "Drink slowly"
      ],
      time: "After meal",
      dosage: "Few sips",
      benefit: "Relieves bloating and indigestion"
    },
    {
      plant: "Ginger",
      method: "Light Ginger Tea",
      steps: [
        "Take small piece of ginger",
        "Boil in water for 5 minutes",
        "Drink lukewarm"
      ],
      time: "Evening",
      dosage: "Half cup",
      benefit: "Aids digestion and reduces nausea"
    }
  ]
},

  // ================= ACNE =================
  // ================= ACNE =================

//  CHILD
{
  problem: "acne",
  ageGroup: "child",
  remedies: [
    {
      plant: "Aloe Vera",
      method: "Aloe Gel Application",
      steps: [
        "Take fresh aloe vera leaf",
        "Extract gel carefully",
        "Apply gently on affected area",
        "Leave for 15-20 minutes",
        "Wash with normal water"
      ],
      time: "Evening",
      dosage: "Apply",
      benefit: "Soothes skin and reduces irritation"
    },
    {
      plant: "Rose Water",
      method: "Rose Water Cleanse",
      steps: [
        "Take cotton",
        "Dip in rose water",
        "Apply on face gently",
        "Let it dry naturally"
      ],
      time: "Morning",
      dosage: "Apply",
      benefit: "Cleans skin and reduces mild acne"
    }
  ]
},

//  ADULT
{
  problem: "acne",
  ageGroup: "adult",
  remedies: [
    {
      plant: "Neem",
      method: "Neem Face Pack",
      steps: [
        "Take fresh neem leaves",
        "Wash and grind into paste",
        "Apply evenly on face",
        "Leave for 15-20 minutes",
        "Wash with lukewarm water"
      ],
      time: "Evening",
      dosage: "Apply",
      benefit: "Kills acne-causing bacteria"
    },
    {
      plant: "Aloe Vera",
      method: "Aloe Gel",
      steps: [
        "Extract fresh aloe vera gel",
        "Apply on acne spots",
        "Leave overnight",
        "Wash in morning"
      ],
      time: "Night",
      dosage: "Apply",
      benefit: "Reduces inflammation and scars"
    },
    {
      plant: "Turmeric",
      method: "Haldi Face Pack",
      steps: [
        "Take 1 pinch turmeric",
        "Mix with honey or milk",
        "Apply on acne",
        "Leave for 10-15 minutes",
        "Wash gently"
      ],
      time: "Night",
      dosage: "Apply",
      benefit: "Reduces redness and infection"
    }
  ]
},

//  OLD
{
  problem: "acne",
  ageGroup: "old",
  remedies: [
    {
      plant: "Aloe Vera",
      method: "Aloe Gel",
      steps: [
        "Extract gel from aloe leaf",
        "Apply gently on skin",
        "Leave for 15-20 minutes",
        "Wash with water"
      ],
      time: "Evening",
      dosage: "Apply",
      benefit: "Soothes sensitive skin"
    },
    {
      plant: "Neem",
      method: "Neem Water Wash",
      steps: [
        "Boil neem leaves in water",
        "Cool the water",
        "Use it to wash face"
      ],
      time: "Morning",
      dosage: "Use as wash",
      benefit: "Prevents infection and cleans skin"
    }
  ]
},

  // ================= HAIR FALL =================
  // ================= HAIR FALL =================

//  CHILD
{
  problem: "hair fall",
  ageGroup: "child",
  remedies: [
    {
      plant: "Coconut Oil",
      method: "Coconut Oil Massage",
      steps: [
        "Take 1-2 teaspoons coconut oil",
        "Warm it slightly",
        "Massage gently on scalp",
        "Leave for 30 minutes",
        "Wash with mild shampoo"
      ],
      time: "Evening",
      dosage: "Apply",
      benefit: "Nourishes scalp and reduces hair fall"
    },
    {
      plant: "Aloe Vera",
      method: "Aloe Gel Application",
      steps: [
        "Extract fresh aloe vera gel",
        "Apply gently on scalp",
        "Leave for 20 minutes",
        "Wash with water"
      ],
      time: "Evening",
      dosage: "Apply",
      benefit: "Soothes scalp and strengthens roots"
    }
  ]
},

//  ADULT
{
  problem: "hair fall",
  ageGroup: "adult",
  remedies: [
    {
      plant: "Aloe Vera",
      method: "Hair Mask",
      steps: [
        "Extract fresh aloe vera gel",
        "Apply evenly on scalp and hair",
        "Massage gently for 5 minutes",
        "Leave for 30 minutes",
        "Wash with mild shampoo"
      ],
      time: "Evening",
      dosage: "Apply",
      benefit: "Strengthens hair roots and reduces hair fall"
    },
    {
      plant: "Onion",
      method: "Onion Juice",
      steps: [
        "Take 1 onion and extract juice",
        "Apply juice on scalp using cotton",
        "Massage gently",
        "Leave for 20-30 minutes",
        "Wash with shampoo"
      ],
      time: "Evening",
      dosage: "Apply",
      benefit: "Boosts hair growth and improves blood circulation"
    },
    {
      plant: "Amla",
      method: "Amla Oil Massage",
      steps: [
        "Take amla oil",
        "Massage gently on scalp",
        "Leave overnight",
        "Wash in morning"
      ],
      time: "Night",
      dosage: "Apply",
      benefit: "Strengthens hair and prevents hair thinning"
    }
  ]
},

//  OLD
{
  problem: "hair fall",
  ageGroup: "old",
  remedies: [
    {
      plant: "Coconut Oil",
      method: "Coconut Oil Massage",
      steps: [
        "Take small amount of coconut oil",
        "Warm slightly",
        "Massage gently on scalp",
        "Leave for 30-45 minutes",
        "Wash with mild shampoo"
      ],
      time: "Evening",
      dosage: "Apply",
      benefit: "Improves blood circulation and nourishes scalp"
    },
    {
      plant: "Amla",
      method: "Amla Juice Intake",
      steps: [
        "Take 1 teaspoon amla juice",
        "Mix with water",
        "Drink daily"
      ],
      time: "Morning",
      dosage: "1 tsp",
      benefit: "Provides nutrients and strengthens hair from inside"
    }
  ]
},

  // ================= IMMUNITY =================
 // ================= LOW IMMUNITY =================

//  CHILD
{
  problem: "low immunity",
  ageGroup: "child",
  remedies: [
    {
      plant: "Tulsi",
      method: "Tulsi Water",
      steps: [
        "Take 2-3 tulsi leaves",
        "Boil in 1 cup water",
        "Cool slightly",
        "Give small sips"
      ],
      time: "Morning",
      dosage: "Few sips",
      benefit: "Boosts immunity gently"
    },
    {
      plant: "Honey",
      method: "Honey with Milk",
      steps: [
        "Take warm milk",
        "Add 1 teaspoon honey",
        "Mix well and give"
      ],
      time: "Night",
      dosage: "1 cup",
      benefit: "Improves immunity and sleep"
    },
    {
      plant: "Amla",
      method: "Amla Candy",
      steps: [
        "Take small amla candy piece",
        "Give after meal"
      ],
      time: "Afternoon",
      dosage: "1 piece",
      benefit: "Rich in Vitamin C"
    }
  ]
},

//  ADULT
{
  problem: "low immunity",
  ageGroup: "adult",
  remedies: [
    {
      plant: "Tulsi",
      method: "Tulsi Tea",
      steps: [
        "Take 5-7 tulsi leaves",
        "Boil in 1 cup water",
        "Let it simmer for 5-7 minutes",
        "Strain and drink warm"
      ],
      time: "Morning",
      dosage: "1 cup",
      benefit: "Boosts immunity and fights infections"
    },
    {
      plant: "Amla",
      method: "Amla Juice",
      steps: [
        "Take fresh amla",
        "Extract juice or use ready juice",
        "Mix with water",
        "Drink on empty stomach"
      ],
      time: "Morning",
      dosage: "1 glass",
      benefit: "Very rich in Vitamin C"
    },
    {
      plant: "Giloy",
      method: "Giloy Juice",
      steps: [
        "Take giloy stem or juice",
        "Boil or dilute in water",
        "Drink fresh"
      ],
      time: "Morning",
      dosage: "20-30 ml",
      benefit: "Improves immunity and detoxifies body"
    },
    {
      plant: "Turmeric",
      method: "Haldi Milk",
      steps: [
        "Take 1 glass warm milk",
        "Add 1/2 tsp turmeric",
        "Mix well and drink"
      ],
      time: "Night",
      dosage: "1 glass",
      benefit: "Fights infection and improves immunity"
    }
  ]
},

//  OLD
{
  problem: "low immunity",
  ageGroup: "old",
  remedies: [
    {
      plant: "Tulsi",
      method: "Tulsi Decoction",
      steps: [
        "Take tulsi leaves",
        "Boil in water",
        "Drink warm"
      ],
      time: "Morning",
      dosage: "Half cup",
      benefit: "Improves respiratory immunity"
    },
    {
      plant: "Amla",
      method: "Amla Juice",
      steps: [
        "Take 1 teaspoon amla juice",
        "Mix in warm water",
        "Drink slowly"
      ],
      time: "Morning",
      dosage: "1 tsp",
      benefit: "Provides antioxidants"
    },
    {
      plant: "Ashwagandha",
      method: "Ashwagandha Milk",
      steps: [
        "Take warm milk",
        "Add ashwagandha powder",
        "Mix well and drink"
      ],
      time: "Night",
      dosage: "1 glass",
      benefit: "Boosts strength and immunity"
    }
  ]
},

  // ================= JOINT PAIN =================
  // ================= JOINT PAIN =================

{
  problem: "joint pain",
  ageGroup: "old",
  remedies: [
    {
      plant: "Turmeric",
      method: "Haldi Milk",
      steps: [
        "Take 1 glass warm milk",
        "Add 1/2 teaspoon turmeric powder",
        "Mix well until fully dissolved",
        "Drink slowly before sleeping"
      ],
      time: "Night",
      dosage: "1 glass",
      benefit: "Reduces inflammation and joint pain"
    },
    {
      plant: "Ginger",
      method: "Ginger Paste Application",
      steps: [
        "Take fresh ginger and grind into paste",
        "Apply paste gently on painful joints",
        "Leave for 20-30 minutes",
        "Wash with lukewarm water"
      ],
      time: "Evening",
      dosage: "Apply",
      benefit: "Improves blood circulation and reduces swelling"
    },
    {
      plant: "Mustard Oil",
      method: "Warm Oil Massage",
      steps: [
        "Take mustard oil and warm it slightly",
        "Massage gently on affected joints",
        "Massage for 10-15 minutes",
        "Cover area to keep it warm"
      ],
      time: "Morning",
      dosage: "Apply",
      benefit: "Relieves stiffness and improves joint mobility"
    },
    {
      plant: "Fenugreek (Methi)",
      method: "Methi Water",
      steps: [
        "Soak 1 teaspoon fenugreek seeds overnight",
        "Drink the water in the morning",
        "Chew soaked seeds if comfortable"
      ],
      time: "Morning",
      dosage: "1 tsp seeds",
      benefit: "Reduces joint pain and strengthens bones"
    }
  ]
}

];
async function seedPlans() {
  try {
    await mongoose.connect(
      "mongodb+srv://sainikhushi007:FEcIKbrGLe8FDZ33@clustervhg.sy34kax.mongodb.net/Virtual_Herbal_Garden",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("Connected to MongoDB");

    await HerbalPlan.deleteMany({});
    console.log("Old plans deleted");

    const result = await HerbalPlan.insertMany(plans);
    console.log(`${result.length} plans inserted`);

    mongoose.connection.close();
  } catch (error) {
    console.error("Error seeding plans:", error);
  }
}

seedPlans();