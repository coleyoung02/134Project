import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";

export const restaurants = {
  Chipotle: {
    name: "Chipotle",
    distance: 1.5,
    rating: 3.5,
    cost: 2,
    cuisines: ["Mexican"],
    categories: ["Fast food", "Bowl"],
    safeRestrictions: ["nuts", "dairy", "vegan", "vegetarian", "soy", "fish"],
    ammenities: [
      "Apple Pay",
      "Google Pay",
      "Mobile Order",
      "Takeout",
      "Contactless Payment",
    ],
  },
  Cava: {
    name: "Cava",
    distance: 2.3,
    rating: 3.8,
    cost: 2,
    cuisines: ["Mediterranean"],
    categories: ["Fast food", "Bowl"],
    safeRestrictions: ["nuts", "dairy", "vegan", "vegetarian", "soy", "fish"],
    ammenities: [
      "Apple Pay",
      "Google Pay",
      "Mobile Order",
      "Takeout",
      "Contactless Payment",
    ],
  },
  HiroNori: {
    name: "HiroNori Craft Ramen",
    distance: 3.1,
    rating: 4.4,
    cost: 3,
    cusines: ["Japanese"],
    categories: ["Restaurant", "Ramen"],
    safeRestrictions: ["nuts", "dairy", "vegetarian"],
    ammenities: ["Apple Pay", "Google Pay", "Contactless Payment"],
  },
  HaiDiLao: {
    name: "HaiDiLao HotPot",
    distance: 2.0,
    rating: 3.9,
    cost: 3,
    cusines: ["Chinese"],
    categories: ["Restaurant", "Hotpot", "Soup"],
    safeRestrictions: ["nuts", "dairy", "vegetarian", "fish"],
    ammenities: ["Apple Pay", "Google Pay", "Contactless Payment"],
  },
  ShariNori: {
    name: "ShariNori",
    distance: 4.1,
    rating: 4.1,
    cost: 3,
    cusines: ["Japanese"],
    categories: ["Restaurant", "Sushi"],
    safeRestrictions: ["nuts", "dairy", "vegetarian", "fish"],
    ammenities: ["Apple Pay", "Google Pay", "Contactless Payment"],
  },
  NepCafe: {
    name: "Nep Cafe",
    distance: 4.5,
    rating: 4.6,
    cost: 3,
    cusines: ["Vietnamese"],
    categories: ["Cafe", "Breakfast", "Brunch"],
    safeRestrictions: ["nuts", "dairy", "fish"],
    ammenities: ["Apple Pay", "Google Pay", "Takeout", "Contactless Payment"],
  },
  HalalGuys: {
    name: "The Halal Guys",
    distance: 3.7,
    rating: 3.8,
    cost: 2,
    cusines: ["Middle Eastern"],
    categories: ["Fast food", "Bowl", "Halal"],
    safeRestrictions: ["nuts", "dairy", "fish", "halal", "soy"],
    ammenities: ["Apple Pay", "Google Pay", "Takeout", "Contactless Payment"],
  },
  TaqueriaAyutlaOaxaca: {
    name: "Taqueria Ayutla Oaxaca",
    distance: 2.2,
    rating: 4.3,
    cost: 1,
    cusines: ["Mexican"],
    categories: ["Food truck", "Tacos"],
    safeRestrictions: ["nuts", "dairy", "fish", "soy"],
    ammenities: ["Cash only", "Takeout"],
  },
  ElPolloLoco: {
    name: "El Pollo Loco",
    distance: 1.6,
    rating: 3.3,
    cost: 1,
    cusines: ["Mexican"],
    categories: ["Fast food", "Chicken"],
    safeRestrictions: ["nuts", "dairy", "fish", "soy"],
    ammenities: [
      "Apple Pay",
      "Google Pay",
      "Mobile order",
      "Drive Thru",
      "Contactless Payment",
    ],
  },
  RaisingCanes: {
    name: "Raising Canes",
    distance: 1.6,
    rating: 4.0,
    cost: 1,
    cusines: ["American"],
    categories: ["Fast food", "Chicken"],
    safeRestrictions: ["nuts", "fish", "soy"],
    ammenities: [
      "Apple Pay",
      "Google Pay",
      "Mobile order",
      "Drive Thru",
      "Contactless Payment",
    ],
  },
};

export const searchCategories = {
  cuisines: {
    category: "Cuisines",
    values: [
      "Mexican",
      "Asian",
      "Mediterranean",
      "Chinese",
      "Japanese",
      "Vietnamese",
      "American",
      "Middle Eastern",
      "Korean",
      "Peruvian",
      "Nigerian",
      "Italian",
      "Filipino",
    ],
  },
  diets: {
    category: "Diets",
    values: [
      "Vegan",
      "Vegetarian",
      "Pescatarian",
      "Gluten Free",
      "Halal",
      "Kosher",
    ],
  },
  restrictions: {
    // dietary exclusions
    category: "Restrictions",
    values: [
      "nuts",
      "peanut",
      "fish",
      "soy",
      "dairy",
      "egg",
      "seafood",
      "shellfish",
    ],
  },
  ammenities: {
    category: "Amenities",
    values: [
      "Apple Pay",
      "Google Pay",
      "Reservations",
      "Takeout",
      "Delivery",
      "Mobile Order",
      "Drive Thru",
      "Contactless Payment",
      "Cash Only",
      "Serves Alcohol",
    ],
  },
};

export const icons = {
  "Apple Pay": {
    name: "Apple Pay",
    icon: <FontAwesome5 name="apple-pay" size={24} color="black" />,
  },
  "Google Pay": {
    name: "Google Pay",
    icon: <FontAwesome5 name="google-pay" size={24} color="black" />,
  },
  Reservations: {
    name: "Reservations",
    icon: (
      <MaterialCommunityIcons name="calendar-clock" size={24} color="black" />
    ),
  },
  Takeout: {
    name: "Takeout",
    icon: (
      <MaterialCommunityIcons name="food-takeout-box" size={24} color="black" />
    ),
  },
  Delivery: {
    name: "Delivery",
    icon: <MaterialIcons name="delivery-dining" size={24} color="black" />,
  },
  "Mobile Order": {
    name: "Mobile Order",
    icon: <Feather name="smartphone" size={24} color="black" />,
  },
  "Drive Thru": {
    name: "Drive Thru",
    icon: <FontAwesome5 name="car" size={24} color="black" />,
  },
  "Contactless Payment": {
    name: "Contactless Payment",
    icon: (
      <MaterialCommunityIcons
        name="contactless-payment"
        size={24}
        color="black"
      />
    ),
  },
  "Cash Only": {
    name: "Cash Only",
    icon: (
      <MaterialCommunityIcons name="credit-card-off" size={24} color="black" />
    ),
  },
  "Serves Alcohol": {
    name: "Serves Alcohol",
    icon: <FontAwesome5 name="glass-martini-alt" size={24} color="black" />,
  },
  Vegan: {
    name: "Vegan",
    icon: <MaterialCommunityIcons name="cow" size={24} color="black" />,
  },
  Vegetarian: {
    name: "Vegetarian",
    icon: <FontAwesome5 name="leaf" size={24} color="black" />,
  },
  Pescatarian: {
    name: "Pescatarian",
    icon: <FontAwesome5 name="fish" size={24} color="black" />,
  },
  "Gluten Free": {
    name: "Gluten Free",
    icon: <MaterialCommunityIcons name="barley-off" size={24} color="black" />,
  },
  Halal: {
    name: "Halal",
    icon: <MaterialCommunityIcons name="food-halal" size={24} color="black" />,
  },
  Kosher: {
    name: "Kosher",
    icon: <MaterialCommunityIcons name="food-kosher" size={24} color="black" />,
  },
};
