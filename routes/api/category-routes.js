const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", (req, res) => {
  // navigate to the root of the api/categories endpoint
  Category.findAll({
    // find all categories
    include: [
      // be sure to include its associated Products
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      },
    ],
  }).then((categoryData) => {
    // send the category data back to the client as JSON
    res.json(categoryData); // return the category data as JSON
  });
});

router.get("/:id", (req, res) => {
  // navigate to the api/categories/:id endpoint
  Category.findOne({
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
  }).then((categoryData) => {
    res.json(categoryData); // return the category data as JSON
  });
});

router.post("/", (req, res) => {
  // create a new category
  Category.create({
    // create a new category
    category_name: req.body.category_name, // use the key/value pairings we set up in the model
  })
    .then((categoryData) => {
      // send the category data back to the client as confirmation and the new category's id
      res.json(categoryData); // return the category data as JSON
    })
    .catch((err) => {
      // if there is a server error, return that error
      res.status(500).json(err); // if there is a server error, return that error
    });
});

router.put("/:id", (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    // update a category by its `id` value
    where: {
      id: req.params.id,
    },
  })
    .then((categoryData) => {
      // send the category data back to the client as confirmation
      res.json(categoryData); // return the category data as JSON
    })
    .catch((err) => {
      // if there is a server error, return that error
      res.status(500).json(err); // if there is a server error, return that error
    });
});

router.delete("/:id", (req, res) => {
  // delete a category by its `id` value
  Category.destroy({
    // delete a category by its `id` value
    where: {
      id: req.params.id,
    },
  })
    .then((categoryData) => {
      // send the category data back to the client as confirmation
      res.json(categoryData); // return the category data as JSON
    })
    .catch((err) => {
      // if there is a server error, return that error
      res.status(500).json(err); // if there is a server error, return that error
    });
});

module.exports = router;
