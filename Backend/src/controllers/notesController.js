import Note from "../models/Note.js";


export async function getAllNotes (req, res) {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        console.error("Error fetching notes:", error);
        res.status(500).json({ message: "Failed to fetch notes", error: error.message });
    }
};

export async function createNote  (req, res) {
    try {
        const { title, content} = req.body;
        const newNote = new Note({ title,content});
        await newNote.save();
        res.status(201).json({message:"Note created successfully"});
    } catch (error) {
        console.error("Error in createNote controller:", error);
        res.status(500).json({ message: "internal server error" });
    }
};

export const updateNote = (req, res) => {
    res.status(200).json({ message : "You just updated a note successfully" });
};

export const deleteNote = (req, res) => {
    res.status(200).json({ message : "You just deleted a note successfully" });
};