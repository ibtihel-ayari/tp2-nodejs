const express = require('express');
const voiture = express.Router();

let voitures = [
    { id: 1, name: "clio" },
    { id: 2, name: "megane" },
    { id: 3, name: "range" }
];

voiture.use(express.json());

voiture.post('/', (req, res) => {
    const newCar = req.body;
    voitures.push(newCar);
    res.send('Voiture ajoutée avec succès');
});

voiture.get('/', (req, res) => {
    res.json(voitures);
});

voiture.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const car = voitures.find(car => car.id === id);
    if (car) {
        res.json(car);
    } else {
        res.status(404).send('Voiture non trouvée');
    }
});

voiture.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedCar = req.body;
    let carIndex = voitures.findIndex(car => car.id === id);
    if (carIndex !== -1) {
        voitures[carIndex] = { ...voitures[carIndex], ...updatedCar };
        res.send('Voiture mise à jour avec succès');
    } else {
        res.status(404).send('Voiture non trouvée');
    }
});

voiture.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const carIndex = voitures.findIndex(car => car.id === id);
    if (carIndex !== -1) {
        voitures.splice(carIndex, 1);
        res.send('Voiture supprimée avec succès');
    } else {
        res.status(404).send('Voiture non trouvée');
    }
});

module.exports = voiture;
