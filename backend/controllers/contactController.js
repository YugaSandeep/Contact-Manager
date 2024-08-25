import asyncHandler from "express-async-handler";
import Contact from "../models/contactModel.js";

//@desc Get all contacts
//@route GET api/contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find({ user_id: req.user.id });
    res.status(200).json(contacts);
});

//@desc get contact by id
//@route GET api/contacts/:id
//@access private
const getContactById = asyncHandler(async (req, res) => {
    console.log(req.params);
    const contact = await Contact.findById(req.params.id);
    console.log("The contact requested", contact);
    if(!contact) {
        res.status(404);
        throw new Error("Contact Not Found");
    }
    res.status(200).json(contact);
});

//@desc To create contacts
//@route POST api/contacts
//@access private
const createContact = asyncHandler(async (req, res) => {
    // console.log(req.body);
    console.log("Request sent for creation purpose");
    console.log(req.body);
    const { name, email, phone } = req.body;
    if (!name || !email || !phone) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }

    const contact = await Contact.create({
        name,
        email,
        phone,
        user_id: req.user.id
    });
    res.status(200).json(contact);
});

//@desc update contact by id
//@route PUT api/contacts/:id
//@access private
const updateContactById = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    console.log("The contact requested", contact);
    if(!contact) {
        res.status(404);
        throw new Error("Contact Not Found");
    }

    if(contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User doesn't have permission to Update the contacts")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
    );
    res.status(200).json(updatedContact);
});

//@desc get contact by id
//@route GET api/contacts/:id
//@access private
const deleteContactById = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    console.log("The contact requested", contact);
    if(!contact) {
        res.status(404);
        throw new Error("Contact Not Found");
    }

    if(contact.user_id.toString() !== req.user.id) {
        res.status(403);
        throw new Error("User doesn't have permission to Delete the contacts")
    }

    await Contact.findByIdAndDelete(req.params.id);
    res.status(200).json(contact);
});

export { getContacts, getContactById, createContact, updateContactById, deleteContactById };