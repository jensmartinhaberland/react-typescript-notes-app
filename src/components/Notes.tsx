import React from "react";
import { Note } from "../models/note.model";
import { Button, Card } from "react-bootstrap";

interface NotesProps {
  note: Note;
  handleDelete: (id: string) => void;
}

const Notes = ({ note, handleDelete }: NotesProps) => {
  return (
    <div className="mb-3">
      <Card style={{ backgroundColor: note.color }}>
        <Card.Body>
          <Card.Title>{note.title}</Card.Title>
          <Card.Text>{note.text}</Card.Text>
          <Card.Subtitle className="text-muted">{note.date}</Card.Subtitle>
          <Button
            className="mt-3"
            variant="danger"
            onClick={() => handleDelete(note.id)}
          >
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Notes;