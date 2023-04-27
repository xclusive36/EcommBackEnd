const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", (req, res) => {
  // navigate to the root of the api/tags endpoint
  Tag.findAll({
    // find all tags
    include: [
      {
        model: Product, // include its associated Product data
        attributes: ["id", "product_name", "price", "stock", "category_id"], // return the product id, product name, price, stock, and category id
      },
    ],
  })
    .then((tagData) => {
      // send the tag data back to the client as JSON
      res.json(tagData); // return the tag data as JSON
    })
    .catch((err) => {
      // if there's an error, return it
      res.status(400).json(err); // return the error as JSON
    });
});

router.get("/:id", (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  Tag.findOne({
    // find a single tag by its `id` value
    where: {
      id: req.params.id, // use the id from the request parameters to filter the data
    },
    include: [
      {
        model: Product, // include its associated Product data
        attributes: ["id", "product_name", "price", "stock", "category_id"], // return the product id, product name, price, stock, and category id
      },
    ],
  })
    .then((tagData) => {
      // send the tag data back to the client as JSON
      res.json(tagData); // return the tag data as JSON
    })
    .catch((err) => {
      // if there's an error, return it
      res.status(400).json(err); // return the error as JSON
    });
});

router.post("/", (req, res) => {
  // create a new tag
  Tag.create({
    // create a new tag
    tag_name: req.body.tag_name, // use the tag_name from the request body to populate the new tag
  })
    .then((tagData) => {
      // send the newly created tag back to the client as JSON
      res.json(tagData); // return the tag data as JSON
    })
    .catch((err) => {
      // if there's an error, return it
      res.status(400).json(err); // return the error as JSON
    });
});

router.put("/:id", (req, res) => {
  // update a tag's name by its `id` value
  Tag.update(
    {
      // update a tag's name by its `id` value
      tag_name: req.body.tag_name, // use the tag_name from the request body to populate the new tag
    },
    {
      where: {
        id: req.params.id, // use the id from the request parameters to filter the data
      },
    }
  )
    .then((tagData) => {
      // send the newly created tag back to the client as JSON
      res.json(tagData); // return the tag data as JSON
    })
    .catch((err) => {
      // if there's an error, return it
      res.status(400).json(err); // return the error as JSON
    });
});

router.delete("/:id", (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({
    // delete on tag by its `id` value
    where: {
      id: req.params.id, // use the id from the request parameters to filter the data
    },
  })
    .then((tagData) => {
      // send the newly created tag back to the client as JSON
      res.json(tagData); // return the tag data as JSON
    })
    .catch((err) => {
      // if there's an error, return it
      res.status(400).json(err); // return the error as JSON
    });
});

module.exports = router;
