import NotesApi from "../../model/api/notes.api";

export default {
  Query: {
    notes: () => {
      return NotesApi.get();
    },
    note: (_: any, params: { id: string }) => {
      return NotesApi.find(params.id);
    },
  }
};

