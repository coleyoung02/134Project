import {
  FontAwesome5,
  MaterialCommunityIcons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import { themeColors } from "../styles";

export const restaurants = {
  Chipotle: {
    name: "Chipotle",
    distance: 1.5,
    rating: 3.5,
    cost: 2,
    location: "Irvine",
    cuisines: ["Mexican"],
    categories: ["Fast food", "Bowl"],
    safeRestrictions: ["nuts", "dairy", "vegan", "vegetarian", "soy", "fish"],
    urlLogo: ["https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/Chipotle_Mexican_Grill_logo.svg/800px-Chipotle_Mexican_Grill_logo.svg.png"],
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
    location: "Irvine",
    cuisines: ["Mediterranean"],
    categories: ["Fast food", "Bowl"],
    safeRestrictions: ["nuts", "dairy", "vegan", "vegetarian", "soy", "fish"],
    urlLogo: ["https://static.wikia.nocookie.net/usastorefanon/images/b/b7/CAVA_logo.png/revision/latest?cb=20200628162654"],
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
    location: "Costa Mesa",
    cuisines: ["Japanese"],
    categories: ["Restaurant", "Ramen"],
    safeRestrictions: ["nuts", "dairy", "vegetarian"],
    urlLogo: ["https://images.squarespace-cdn.com/content/v1/5d228d7979e63900016be355/07ea53f5-2f41-49a6-98e2-685270d790dd/HiroNori_Menu_Logo_20210326.png"],
    ammenities: ["Apple Pay", "Google Pay", "Contactless Payment"],
  },
  HaiDiLao: {
    name: "HaiDiLao HotPot",
    distance: 2.0,
    rating: 3.9,
    cost: 3,
    location: "Irvine",
    cuisines: ["Chinese"],
    categories: ["Restaurant", "Hotpot", "Soup"],
    safeRestrictions: ["nuts", "dairy", "vegetarian", "fish"],
    urlLogo: ["https://companieslogo.com/img/orig/6862.HK-343b2a76.png?t=1596178945"],
    ammenities: ["Apple Pay", "Google Pay", "Contactless Payment"],
  },
  ShariNori: {
    name: "ShariNori",
    distance: 4.1,
    rating: 4.1,
    cost: 3,
    location: "Santa Ana",
    cuisines: ["Japanese"],
    categories: ["Restaurant", "Sushi"],
    safeRestrictions: ["nuts", "dairy", "vegetarian", "fish"],
    urlLogo: ["https://ordersharinori.square.site/uploads/b/72a4917a9c62d4fdac3d692d2be9d7863c85f59a71bb96324d44d3a1ec40c9be/JPG-01_1620678580.jpg?width=400"],
    ammenities: ["Apple Pay", "Google Pay", "Contactless Payment"],
  },
  NepCafe: {
    name: "Nep Cafe",
    distance: 4.5,
    rating: 4.6,
    cost: 3,
    location: "Fountain Valley",
    cuisines: ["Vietnamese"],
    categories: ["Cafe", "Breakfast", "Brunch"],
    safeRestrictions: ["nuts", "dairy", "fish"],
    urlLogo: ["https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_100,q_80,fl_lossy,dpr_2.0,c_fit,f_auto,h_100/hclt47z80xktdualtkaf"],
    ammenities: ["Apple Pay", "Google Pay", "Takeout", "Contactless Payment"],
  },
  HalalGuys: {
    name: "The Halal Guys",
    distance: 3.7,
    rating: 3.8,
    cost: 2,
    location: "Costa Mesa",
    cuisines: ["Middle Eastern"],
    categories: ["Fast food", "Bowl", "Halal"],
    safeRestrictions: ["nuts", "dairy", "fish", "halal", "soy"],
    urlLogo: ["https://thehalalguys.com/wp-content/uploads/2020/07/site-logo-2x.png"],
    ammenities: ["Apple Pay", "Google Pay", "Takeout", "Contactless Payment"],
  },
  TaqueriaAyutlaOaxaca: {
    name: "Taqueria Ayutla Oaxaca",
    distance: 2.2,
    rating: 4.3,
    cost: 1,
    location: "Santa Ana",
    cuisines: ["Mexican"],
    categories: ["Food truck", "Tacos"],
    urlLogo: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQFPgDXrjgAJf3umYU-koChZnFuDhrja3c4m8uNx8UAg&usqp=CAU&ec=48600112"],
    safeRestrictions: ["nuts", "dairy", "fish", "soy"],
    ammenities: ["Cash only", "Takeout"],
  },
  ElPolloLoco: {
    name: "El Pollo Loco",
    distance: 1.6,
    rating: 3.3,
    cost: 1,
    cuisines: ["Mexican"],
    location: "Irvine",
    categories: ["Fast food", "Chicken"],
    safeRestrictions: ["nuts", "dairy", "fish", "soy"],
    urlLogo: ["https://1000logos.net/wp-content/uploads/2020/09/El-Pollo-Loco-Logo.jpg"],
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
    cuisines: ["American"],
    location: "Costa Mesa",
    categories: ["Fast food", "Chicken"],
    safeRestrictions: ["nuts", "fish", "soy"],
    urlLogo: ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Raising_Cane%27s_Chicken_Fingers_logo.svg/1200px-Raising_Cane%27s_Chicken_Fingers_logo.svg.png"],
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
    values: ["Vegan", "Vegetarian", "Pescatarian", "Halal", "Kosher"],
  },
  restrictions: {
    // dietary exclusions
    category: "Restrictions",
    values: ["nuts", "fish", "soy", "dairy", "egg", "seafood", "gluten"],
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
    icon: {
      "dark-18": <FontAwesome5 name="apple-pay" size={20} color="black" />,
      "dark-24": <FontAwesome5 name="apple-pay" size={26} color="black" />,
      "light-18": (
        <FontAwesome5
          name="apple-pay"
          size={20}
          color={themeColors.accentLight}
        />
      ),
      "light-24": (
        <FontAwesome5
          name="apple-pay"
          size={26}
          color={themeColors.accentLight}
        />
      ),
    },
  },
  "Google Pay": {
    name: "Google Pay",
    icon: {
      "dark-18": <FontAwesome5 name="google-pay" size={20} color="black" />,
      "dark-24": <FontAwesome5 name="google-pay" size={26} color="black" />,
      "light-18": (
        <FontAwesome5
          name="google-pay"
          size={20}
          color={themeColors.accentLight}
        />
      ),
      "light-24": (
        <FontAwesome5
          name="google-pay"
          size={26}
          color={themeColors.accentLight}
        />
      ),
    },
  },
  Reservations: {
    name: "Reservations",
    icon: {
      "dark-18": (
        <MaterialCommunityIcons name="calendar-clock" size={18} color="black" />
      ),
      "dark-24": (
        <MaterialCommunityIcons name="calendar-clock" size={24} color="black" />
      ),
      "light-18": (
        <MaterialCommunityIcons
          name="calendar-clock"
          size={18}
          color={themeColors.accentLight}
        />
      ),
      "light-24": (
        <MaterialCommunityIcons
          name="calendar-clock"
          size={24}
          color={themeColors.accentLight}
        />
      ),
    },
  },
  Takeout: {
    name: "Takeout",
    icon: {
      "dark-18": (
        <MaterialCommunityIcons
          name="food-takeout-box"
          size={18}
          color="black"
        />
      ),
      "dark-24": (
        <MaterialCommunityIcons
          name="food-takeout-box"
          size={24}
          color="black"
        />
      ),
      "light-18": (
        <MaterialCommunityIcons
          name="food-takeout-box"
          size={18}
          color={themeColors.accentLight}
        />
      ),
      "light-24": (
        <MaterialCommunityIcons
          name="food-takeout-box"
          size={24}
          color={themeColors.accentLight}
        />
      ),
    },
  },
  Delivery: {
    name: "Delivery",
    icon: {
      "dark-18": (
        <MaterialIcons name="delivery-dining" size={18} color="black" />
      ),
      "dark-24": (
        <MaterialIcons name="delivery-dining" size={24} color="black" />
      ),
      "light-18": (
        <MaterialIcons
          name="delivery-dining"
          size={18}
          color={themeColors.accentLight}
        />
      ),
      "light-24": (
        <MaterialIcons
          name="delivery-dining"
          size={24}
          color={themeColors.accentLight}
        />
      ),
    },
  },
  "Mobile Order": {
    name: "Mobile Order",
    icon: {
      "dark-18": <Feather name="smartphone" size={18} color="black" />,
      "dark-24": <Feather name="smartphone" size={24} color="black" />,
      "light-18": (
        <Feather name="smartphone" size={18} color={themeColors.accentLight} />
      ),
      "light-24": (
        <Feather name="smartphone" size={24} color={themeColors.accentLight} />
      ),
    },
  },
  "Drive Thru": {
    name: "Drive Thru",
    icon: {
      "dark-18": <FontAwesome5 name="car" size={18} color="black" />,
      "dark-24": <FontAwesome5 name="car" size={24} color="black" />,
      "light-18": (
        <FontAwesome5 name="car" size={18} color={themeColors.accentLight} />
      ),
      "light-24": (
        <FontAwesome5 name="car" size={24} color={themeColors.accentLight} />
      ),
    },
  },
  "Contactless Payment": {
    name: "Contactless Payment",
    icon: {
      "dark-18": (
        <MaterialCommunityIcons
          name="contactless-payment"
          size={18}
          color="black"
        />
      ),
      "dark-24": (
        <MaterialCommunityIcons
          name="contactless-payment"
          size={24}
          color="black"
        />
      ),
      "light-18": (
        <MaterialCommunityIcons
          name="contactless-payment"
          size={18}
          color={themeColors.accentLight}
        />
      ),
      "light-24": (
        <MaterialCommunityIcons
          name="contactless-payment"
          size={24}
          color={themeColors.accentLight}
        />
      ),
    },
  },
  "Cash Only": {
    name: "Cash Only",
    icon: {
      "dark-18": (
        <MaterialCommunityIcons
          name="credit-card-off"
          size={18}
          color="black"
        />
      ),
      "dark-24": (
        <MaterialCommunityIcons
          name="credit-card-off"
          size={24}
          color="black"
        />
      ),
      "light-18": (
        <MaterialCommunityIcons
          name="credit-card-off"
          size={18}
          color={themeColors.accentLight}
        />
      ),
      "light-24": (
        <MaterialCommunityIcons
          name="credit-card-off"
          size={24}
          color={themeColors.accentLight}
        />
      ),
    },
  },
  "Serves Alcohol": {
    name: "Serves Alcohol",
    icon: {
      "dark-18": (
        <FontAwesome5 name="glass-martini-alt" size={18} color="black" />
      ),
      "dark-24": (
        <FontAwesome5 name="glass-martini-alt" size={24} color="black" />
      ),
      "light-18": (
        <FontAwesome5
          name="glass-martini-alt"
          size={18}
          color={themeColors.accentLight}
        />
      ),
      "light-24": (
        <FontAwesome5
          name="glass-martini-alt"
          size={24}
          color={themeColors.accentLight}
        />
      ),
    },
  },
  Vegan: {
    name: "Vegan",
    icon: {
      "dark-18": <MaterialCommunityIcons name="cow" size={18} color="black" />,
      "dark-24": <MaterialCommunityIcons name="cow" size={24} color="black" />,
      "light-18": (
        <MaterialCommunityIcons
          name="cow"
          size={18}
          color={themeColors.accentLight}
        />
      ),
      "light-24": (
        <MaterialCommunityIcons
          name="cow"
          size={24}
          color={themeColors.accentLight}
        />
      ),
    },
  },
  Vegetarian: {
    name: "Vegetarian",
    icon: {
      "dark-18": <FontAwesome5 name="leaf" size={18} color="black" />,
      "dark-24": <FontAwesome5 name="leaf" size={24} color="black" />,
      "light-18": (
        <FontAwesome5 name="leaf" size={18} color={themeColors.accentLight} />
      ),
      "light-24": (
        <FontAwesome5 name="leaf" size={24} color={themeColors.accentLight} />
      ),
    },
  },
  Pescatarian: {
    name: "Pescatarian",
    icon: {
      "dark-18": <FontAwesome5 name="fish" size={18} color="black" />,
      "dark-24": <FontAwesome5 name="fish" size={24} color="black" />,
      "light-18": (
        <FontAwesome5 name="fish" size={18} color={themeColors.accentLight} />
      ),
      "light-24": (
        <FontAwesome5 name="fish" size={24} color={themeColors.accentLight} />
      ),
    },
  },
  gluten: {
    name: "gluten",
    icon: {
      "dark-18": (
        <MaterialCommunityIcons name="barley-off" size={18} color="black" />
      ),
      "dark-24": (
        <MaterialCommunityIcons name="barley-off" size={24} color="black" />
      ),
      "light-18": (
        <MaterialCommunityIcons
          name="barley-off"
          size={18}
          color={themeColors.accentLight}
        />
      ),
      "light-24": (
        <MaterialCommunityIcons
          name="barley-off"
          size={24}
          color={themeColors.accentLight}
        />
      ),
    },
  },
  Halal: {
    name: "Halal",
    icon: {
      "dark-18": (
        <MaterialCommunityIcons name="food-halal" size={18} color="black" />
      ),
      "dark-24": (
        <MaterialCommunityIcons name="food-halal" size={24} color="black" />
      ),
      "light-18": (
        <MaterialCommunityIcons
          name="food-halal"
          size={18}
          color={themeColors.accentLight}
        />
      ),
      "light-24": (
        <MaterialCommunityIcons
          name="food-halal"
          size={24}
          color={themeColors.accentLight}
        />
      ),
    },
  },
  Kosher: {
    name: "Kosher",
    icon: {
      "dark-18": (
        <MaterialCommunityIcons name="food-kosher" size={18} color="black" />
      ),
      "dark-24": (
        <MaterialCommunityIcons name="food-kosher" size={24} color="black" />
      ),
      "light-18": (
        <MaterialCommunityIcons
          name="food-kosher"
          size={18}
          color={themeColors.accentLight}
        />
      ),
      "light-24": (
        <MaterialCommunityIcons
          name="food-kosher"
          size={24}
          color={themeColors.accentLight}
        />
      ),
    },
  },
  fish: {
    name: "fish",
    icon: {
      "dark-18": (
        <MaterialCommunityIcons name="fish-off" size={18} color="black" />
      ),
      "dark-24": (
        <MaterialCommunityIcons name="fish-off" size={24} color="black" />
      ),
      "light-18": (
        <MaterialCommunityIcons
          name="fish-off"
          size={18}
          color={themeColors.accentLight}
        />
      ),
      "light-24": (
        <MaterialCommunityIcons
          name="fish-off"
          size={24}
          color={themeColors.accentLight}
        />
      ),
    },
  },
  soy: {
    name: "soy",
    icon: {
      "dark-18": (
        <MaterialCommunityIcons name="soy-sauce-off" size={18} color="black" />
      ),
      "dark-24": (
        <MaterialCommunityIcons name="soy-sauce-off" size={24} color="black" />
      ),
      "light-18": (
        <MaterialCommunityIcons
          name="soy-sauce-off"
          size={18}
          color={themeColors.accentLight}
        />
      ),
      "light-24": (
        <MaterialCommunityIcons
          name="soy-sauce-off"
          size={24}
          color={themeColors.accentLight}
        />
      ),
    },
  },
  dairy: {
    name: "dairy",
    icon: {
      "dark-18": (
        <MaterialCommunityIcons name="cheese-off" size={18} color="black" />
      ),
      "dark-24": (
        <MaterialCommunityIcons name="cheese-off" size={24} color="black" />
      ),
      "light-18": (
        <MaterialCommunityIcons
          name="cheese-off"
          size={18}
          color={themeColors.accentLight}
        />
      ),
      "light-24": (
        <MaterialCommunityIcons
          name="cheese-off"
          size={24}
          color={themeColors.accentLight}
        />
      ),
    },
  },
  egg: {
    name: "egg",
    icon: {
      "dark-18": (
        <MaterialCommunityIcons name="egg-off" size={18} color="black" />
      ),
      "dark-24": (
        <MaterialCommunityIcons name="egg-off" size={24} color="black" />
      ),
      "light-18": (
        <MaterialCommunityIcons
          name="egg-off"
          size={18}
          color={themeColors.accentLight}
        />
      ),
      "light-24": (
        <MaterialCommunityIcons
          name="egg-off"
          size={24}
          color={themeColors.accentLight}
        />
      ),
    },
  },
  nuts: {
    name: "nuts",
    icon: {
      "dark-18": (
        <MaterialCommunityIcons name="peanut-off" size={18} color="black" />
      ),
      "dark-24": (
        <MaterialCommunityIcons name="peanut-off" size={24} color="black" />
      ),
      "light-18": (
        <MaterialCommunityIcons
          name="peanut-off"
          size={18}
          color={themeColors.accentLight}
        />
      ),
      "light-24": (
        <MaterialCommunityIcons
          name="peanut-off"
          size={24}
          color={themeColors.accentLight}
        />
      ),
    },
  },
  seafood: {
    name: "seafood",
    icon: {
      "dark-18": (
        <MaterialCommunityIcons name="shark-off" size={18} color="black" />
      ),
      "dark-24": (
        <MaterialCommunityIcons name="shark-off" size={24} color="black" />
      ),
      "light-18": (
        <MaterialCommunityIcons
          name="shark-off"
          size={18}
          color={themeColors.accentLight}
        />
      ),
      "light-24": (
        <MaterialCommunityIcons
          name="shark-off"
          size={24}
          color={themeColors.accentLight}
        />
      ),
    },
  },
};

export const shadow = {
  shadowColor: themeColors.shadowGreen,
  shadowOpacity: 0.7,
  shadowRadius: 10,
};
