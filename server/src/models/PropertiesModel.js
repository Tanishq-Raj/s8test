import mongoose, { Schema } from "mongoose";

const propertySchema = new Schema(
  {
    // title: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },
    // location: {
    //   type: String,
    //   required: true,
    //   trim: true,
    // },
    userId: {
      type: mongoose.Schema.Types.ObjectId, // Store User's _id
      ref: "User", // Reference the User model
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
      enum: ["Residential", "Commercial", "Industrial", "Land"],
    },
    bankName: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: Object,
      default: {
        address: "",
        city: "",
        state: "",
      },
    },
    image: [
      {
        url: String,
        public_id: String,
        fileType: String,
      },
    ],
    description: {
      type: String,
      default: "",
      trim: true,
    },
    auctionDate: {
      type: Date,
      required: true,
    },
    auctionTime: {
      type: String, // HH:mm:ss
      required: true,
    },
    auctionType: {
      type: String,
      required: true,
      enum: ["Normal", "E-auction"],
    },
    contact: {
      type: String,
      required: true,
      trim: true,
    },
    borrower: {
      type: String,
      required: true,
      trim: true,
    },
    amountDue: {
      type: Number,
      required: true,
    },
    deposit: {
      type: Number,
      required: true,
    },
    bidInc: {
      type: Number,
      required: true,
    },
    inspectDate: {
      type: Date,
      required: true,
    },
    inspectTime: {
      type: String, // HH:mm:ss
      required: true,
    },
    message: {
      type: String,
      default: "",
      trim: true,
    },
    // contactNo: {
    //   type: String,
    //   required: true,
    //   match: [/^\+91\d{10}$/, "Invalid contact number"],
    //   trim: true,
    // },
    areaPerSqFt: {
      type: Number,
      required: true,
    },
    nearbyPlaces: {
      type: [String],
      default: [],
    },
    mapLocation: {
      latitude: {
        type: String,
        required: true,
        trim: true,
      },
      longitude: {
        type: String,
        required: true,
        trim: true,
      },
    },
    enquiryUrl: {
      type: String,
      required: true,
      trim: true,
    },
    // addedby: userid //////////////////////////////////////////////////////////////////////////
    // active //******************************************* */
  },
  { timestamps: true }
);

const propertyModel =
  mongoose.models.Properties || mongoose.model("Properties", propertySchema);

export default propertyModel;
