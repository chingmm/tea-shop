//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");
const Tea = require("../../models/teas");

///////////////////////////////////////
// CREATE ROUTER
///////////////////////////////////////
const router = Router();

///////////////////////////////////////
// ROUTES
///////////////////////////////////////

// Index Route
router.get('/', (req, res) => {
  Tea.find({}, (error, allTeas) => {
      res.render('teas/index.jsx', {teas: allTeas})
  })
})

// Show Route
router.get('/:id', (req, res) => {
  Tea.findById(req.params.id, (err, foundTea) => {
      res.render(
          'teas/show.jsx',
          {
              teas: foundTea
          }
      )
  })

})

///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
