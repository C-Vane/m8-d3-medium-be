const { Schema } = require("mongoose");
const mongoose = require("mongoose");
mongoose.set("useFindAndModify", false);
const ArticleSchema = new Schema(
  {
    headLine: {
      type: String,
      required: true,
    },
    subHead: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
    category: {
      name: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: true,
      },
    },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    claps: [{ type: Schema.Types.ObjectId, ref: "User", required: true }],
    reviews: [
      {
        author: { type: Schema.Types.ObjectId, ref: "User", required: true },
        text: {
          type: String,
          required: true,
        },
        createdAt: {
          type: String,
          required: true,
        },
        lastUpdated: {
          type: String,
        },
      },
    ],
    cover: {
      type: String,
    },
  },
  { timestamps: true }
);
ArticleSchema.index({
  "author.name": "text",
  headLine: "text",
  subHead: "text",
  content: "text",
});
module.exports = mongoose.model("Article", ArticleSchema);
