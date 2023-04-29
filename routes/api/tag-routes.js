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

router.post("/", (req, res) => {
  // create a new tag
  /* req.body should look like this...
    {
      tag_name: "Basketball",
      productIds: [1, 2, 3, 4]
    }
  */
  Tag.create({
    // create a new tag
    tag_name: req.body.tag_name, // use the tag_name from the request body to populate the new tag
  })
    .then((tag) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.productIds.length) {
        // if there's product tags, we need to create pairings to bulk create in the ProductTag model
        const productTagIdArr = req.body.productIds.map((product_id) => {
          // map through each product_id
          return {
            // return a new object with the following properties
            product_id,
            tag_id: tag.id, // the product_id and the tag_id, which was saved as tag.id
          };
        });
        return ProductTag.bulkCreate(productTagIdArr); // create multiple product tag entries
      }
      // if no product tags, just respond
      res.status(200).json(tag); // if no product tags, just respond
    })
    .then((productTagIds) => res.status(200).json(productTagIds)) // return the product tag ids as JSON
    .catch((err) => {
      // catch any errors and return them as JSON
      console.log(err);
      res.status(400).json(err);
    });
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
