import express from "express";
import { 
    getContacts,
    getContactById, 
    createContact, 
    updateContactById, 
    deleteContactById 
} from "../controllers/contactController.js";
import validateToken from "../middleware/validateToken.js";
// import { Router } from "express";
const router = express.Router();

router.use(validateToken);

// For getting contacts
router.route("/").get(getContacts).post(createContact);

// For creating the contacts
// router.route("/").post(createContact);

// For getting contact based on id
router.route("/:id").get(getContactById).put(updateContactById).delete(deleteContactById);

// For updating the contacts
// router.route("/:id").put(updateContactById);

// For deleting the contacts
// router.route("/:id").delete(deleteContactById);

export default router;