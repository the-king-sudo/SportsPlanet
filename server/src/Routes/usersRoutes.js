const { Router } = require("express");
const router = Router();
const {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  updateUser,
  postFavorite,
  updateUserIsAdmin,
  postCart,
} = require("../Controllers/usersController");
const { validateUsersCreate } = require("../middleware/usersValidator");
/* This code is defining a route for a POST request to "/favorite" and specifying that it should be
handled by a function called `postFavorite`. The implementation of `postFavorite` is not shown in
this code snippet. */
router.post("/favorite", postFavorite);
/* `router.post("/favorite", postCart);` is defining a route for a POST request to "/favorite" and
specifying that it should be handled by a function called `postCart`. The implementation of
`postCart` is not shown in this code snippet. */
router.post("/cart/:id", postCart);

/* A route that is listening for a get request to the root of the server. */
router.get("/", getUsers);
/* This is a route that is listening for a get request to the root of the server. */
router.get("/:id", getUser);
/* This is a route that is listening for a post request to the root of the server. */
router.post("/", validateUsersCreate, createUser);
/* This is a route that is listening for a put request to the root of the server. */
router.put("/:id", updateUser);
/* `router.put("/isadmin/:id", updateUserIsAdmin)` is defining a route for a PUT request to
"/isadmin/:id" where ":id" is a dynamic parameter that can be any value. This route is handled by a
function called `updateUserIsAdmin` which is responsible for updating the "isAdmin" property of a
user with the specified ID. */
router.put("/isadmin/:id", updateUserIsAdmin);
/* This is a route that is listening for a delete request to the root of the server. */
router.post("/:id", deleteUser);

module.exports = router;
