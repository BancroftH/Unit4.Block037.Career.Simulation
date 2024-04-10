const express = require('express');
const router = express.Router();

// Placeholder route for getting all items
router.get('/', (req, res) => {
    res.json({ message: 'Get all items placeholder' });
});
  
// Placeholder route for getting a single item by ID
router.get('/:id', (req, res) => {
    res.json({ message: `Get item with ID ${req.params.id} placeholder` });
});
  
// Placeholder route for creating a new item
router.post('/', (req, res) => {
    res.json({ message: 'Create item placeholder' });
});
  
// Placeholder route for updating an item
router.put('/:id', (req, res) => {
    res.json({ message: `Update item with ID ${req.params.id} placeholder` });
});
  
// Placeholder route for deleting an item
router.delete('/:id', (req, res) => {
    res.json({ message: `Delete item with ID ${req.params.id} placeholder` });
});

module.exports = router;