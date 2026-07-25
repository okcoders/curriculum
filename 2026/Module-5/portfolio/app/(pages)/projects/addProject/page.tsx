import { addProject } from "../actions";

export default function AddProjectPage() {
    return (
        <form action={addProject}>
      <input name="title" placeholder="Title" />
      <input name="description" placeholder="Description" />
      <button type="submit">Add</button>
    </form>
    )
}