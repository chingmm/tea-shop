//////////////////////////////////
// DEPENDENCIES
/////////////////////////////////
const { Router } = require("express");
const auth = require("../authmiddleware");
const Cart = require("../../models/cart")

///////////////////////////////////////
// CREATE ROUTER
///////////////////////////////////////
const router = Router();

///////////////////////////////////////
// ROUTES
///////////////////////////////////////

// Index Route
router.get("/", auth, async(req, res) => {
  try {
  const cart = await Cart.find({username: req.session.username})
  res.render("cart/index.jsx", {cart})}
  catch(err) {
    console.log(err)
  }
})

// New Route
router.get("/new",auth, async(req, res) => {
  try{
    res.render('cart/new.jsx')
  }
  catch(error){
    console.log(error)
  }
})

// Create Route
router.post("/", auth, async(req, res) => {
  try{
    req.body.username = req.session.username
    await Cart.create(req.body, (error, createdCart) => {
      res.redirect('/cart')
  })
  }
  catch(error){
    console.log(error)
  }
})

// Delete Route
router.delete("/:id", auth, async(req, res) => {
  try{

  }
  catch(error){
    console.log(error)
  }
  await Cart.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect('/cart')
  })
})

// Edit Route
router.get('/edit/:id', auth, async(req, res) => {
  try{
    const cart = await Cart.findById(req.params.id)
    res.render("cart/edit.jsx", {cart})
  }
  catch(error){
    console.log(error)
  }
})

// Update Route
router.put('/edit/:id', auth, async(req, res) => {
  try{
    req.body.username = req.session.username
    await Cart.findByIdAndUpdate(req.params.id, req.body)
    res.redirect('/cart')
  }
  catch(error){
    console.log(error)
  }
})

// Show Route
router.get('/:id', (req, res) => {
  res.render('cart/show.jsx')
})

//TEST ROUTE TO SHOW HOW AUTH MIDDLEWARE WORKS

router.get("/", auth, (req, res) => {
  res.send("if you see this you are logged in");
});

///////////////////////////////////////
// Export Router
///////////////////////////////////////
module.exports = router;
