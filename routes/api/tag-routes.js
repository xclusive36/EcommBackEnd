const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // navigate to the root of the api/tags endpoint
  const tagData = await Tag.findAll({
    // find all tags
    include: [
      {
        model: Product, // include its associated Product data
        attributes: ["id", "product_name", "price", "stock", "category_id"], // return the product id, product name, price, stock, and category id
      },
    ],
  });
  res.json(tagData); // return the tag data as JSON
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  const tagData = await Tag.findOne({
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
  });
  res.json(tagData); // return the tag data as JSON
});

router.post("/", async (req, res) => {
  // create a new tag
  const tagData = await Tag.create({
    // create a new tag
    tag_name: req.body.tag_name, // use the tag_name from the request body to populate the new tag
  });
  res.json(tagData); // return the tag data as JSON
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  const tagData = await Tag.update(
    {
      // update a tag's name by its `id` value
      tag_name: req.body.tag_name, // use the tag_name from the request body to populate the new tag
    },
    {
      where: {
        id: req.params.id, // use the id from the request parameters to filter the data
      },
    }
  );
  res.json(tagData); // return the tag data as JSON
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  const tagData = await Tag.destroy({
    // delete on tag by its `id` value
    where: {
      id: req.params.id, // use the id from the request parameters to filter the data
    },
  });
  res.json(tagData); // return the tag data as JSON
});

module.exports = router;
