export const CreateTodo = ({ onCreate }) => {
  return (
    <form
      className="CreateTodo"
      onSubmit={(event) => {
        event.preventDefault();
        const form = event.target;
        const newTodo = form.elements.newTodo.value;
        form.reset();
        onCreate(newTodo);
      }}
    >
      <input type="text" name="newTodo" />
      <input type="submit" value="Add" />
    </form>
  );
};
