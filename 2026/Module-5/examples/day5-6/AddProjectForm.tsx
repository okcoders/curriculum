// Segment 3 — form that calls the addProject server action.
import { addProject } from "./actions";

export default function AddProjectForm() {
  return (
    <form action={addProject}>
      <input name="title" placeholder="Title" />
      <input name="description" placeholder="Description" />
      <button type="submit">Add</button>
    </form>
  );
}
