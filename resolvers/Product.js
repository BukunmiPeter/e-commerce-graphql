// const { products, categories } = require("../db");

exports.Product = {
  category: ({ categoryId }, args, { db }) => {
    return categories.find((category) => category.id === categoryId);
  },
  reviews: ({ id }, args, { db }) => {
    return db.reviews.filter((review) => review.productId === id);
  },
};
