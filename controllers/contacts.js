const mongodb = require('../data/database');
const { ObjectId } = require('mongodb');

const getAllContacts = async (req, res) => {
    const result = await mongodb.getDb().collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
};

const getSingleContact = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().collection('contacts').find({_id: contactId});
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts[0]);
    });
};

const createContact = async (req, res) => {
    const contact = req.body;
    const result = await mongodb.getDb().collection('contacts').insertOne(contact);
    res.setHeader('Content-Type', 'application/json');
    res.status(201).json({ id: result.insertedId });
};

const updateContact = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const contact = req.body;
    const result = await mongodb.getDb().collection('contacts').updateOne({_id: contactId}, {$set: contact});
    if (result.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Contact not found' });
    }
};

const deleteContact = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().collection('contacts').deleteOne({_id: contactId});
    if (result.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(404).json({ error: 'Contact not found' });
    }
};

module.exports = {
    getAllContacts,
    getSingleContact,
    createContact,
    updateContact,
    deleteContact
};
