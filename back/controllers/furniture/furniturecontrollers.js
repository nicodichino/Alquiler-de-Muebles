/* eslint-disable max-len */
const { furnitureProvider } = require('../../providers/furniture/furnitureprovider');

exports.createFurniture = async (req, res) => {
    try {
        console.log('Datos recibidos del formulario:', req.body);

        const {
            name, description, price, stock, startDate, endDate,
        } = req.body;
        const userId = req.user.id;
        const newFurniture = await furnitureProvider.create({
            name, description, price, stock, startDate, endDate, ownerId: userId,
        });
        console.log('Mueble creado con éxito. ID:', newFurniture.id);
        res.json({ furniture: newFurniture, message: 'Creaste un mueble, sos un capo' });
    } catch (error) {
        console.error('Error al crear el mueble:', error);
        res.status(500).json({ message: 'Error creating Furniture', details: error.message });
    }
};

exports.getFurnitureById = async (req, res) => {
    const furnitureId = req.params.id;
    try {
        const furniture = await furnitureProvider.getFurnitureById(furnitureId);
        res.json({ furniture });
    } catch (error) {
        res.status(404).json({ message: 'Furniture not found' });
    }
};

exports.updateFurniture = async (req, res) => {
    const furnitureId = req.params.id;
    const {
        name, description, price, stock, startDate, endDate,
    } = req.body;
    try {
        const updatedFurniture = await furnitureProvider.updateFurniture(furnitureId, {
            name, description, price, stock, startDate, endDate,
        });
        res.json({ furniture: updatedFurniture, message: 'Furniture updated' });
    } catch (error) {
        res.status(404).json({ message: 'Furniture not found' });
    }
};

exports.deleteFurniture = async (req, res) => {
    const furnitureId = req.params.id;
    try {
        await furnitureProvider.deleteFurniture(furnitureId);
        res.json({ message: 'Furniture deleted' });
    } catch (error) {
        res.status(404).json({ message: 'Furniture not found' });
    }
};

exports.getAll = async (req, res) => {
    try {
        const furniture = await furnitureProvider.getAll();
        res.json(furniture);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching Furniture' });
    }
};

exports.updateAvailability = async (req, res) => {
    const furnitureId = req.params.id;
    const { available } = req.body;
    try {
        const updatedFurniture = await furnitureProvider.updateAvailability(furnitureId, available);
        res.json({ furniture: updatedFurniture, message: 'Furniture availability updated' });
    } catch (error) {
        res.status(404).json({ message: 'Furniture not found' });
    }
};
