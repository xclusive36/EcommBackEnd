const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {

  // navigate to the root of the api/categories endpoint
  const categoryData = await Category.findAll({
    // find all categories
    include: [
      // be sure to include its associated Products
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      },
    ],
  });
  res.json(categoryData); // return the category data as JSON
});

router.get("/:id", async (req, res) => {
  // navigate to the api/categories/:id endpoint
  const categoryData = await Category.findOne({
    // find one category by its `id` value
    where: {
      // be sure to include its associated Products
      id: req.params.id,
    },
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      },
    ],
  });
  res.json(categoryData); // return the category data as JSON
});

router.post("/", async (req, res) => {
  // create a new category
  const categoryData = await Category.create({
    // create a new category
    category_name: req.body.category_name, // use the key/value pairings we set up in the model
  });
  res.json(categoryData); // return the category data as JSON
});

router.put("/:id", async (req, res) => {
  // update a category by its `id` value
  const categoryData = await Category.update({
    // update a category by its `id` value
    category_name: req.body.category_name, // use the key/value pairings we set up in the model
  }, {
    // update a category by its `id` value
    where: {
      id: req.params.id,
    },
  });
  res.json(categoryData); // return the category data as JSON
});

router.delete("/:id", async (req, res) => {
  // delete a category by its `id` value
  const categoryData = await Category.destroy({
    // delete a category by its `id` value
    where: {
      id: req.params.id,
    },
  });
  res.json(categoryData); // return the category data as JSON
});

module.exports = router;
