import Persons, { length, filter } from '../models/persons';

export function getPeople(req, res) {
    if (Persons && length === 0)
        return res.sendStatus(204);
    return res.status(200).json(Persons);
}

export function getPeopleById(req, res) {
    const id = req.params.id;
    if (id && !isNaN(id)) {
        const person = filter((person, _index) => {
            console.log(person.id);
            return person.id === parseInt(id);
        });
        if (person)
            res.status(200).send(person[0]);
        else
            res.sendStatus(204);
    } else {
        return res.sendStatus(400);
    }
}