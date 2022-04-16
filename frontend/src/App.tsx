import { gql, useQuery } from "@apollo/client";
import { NewUserForm } from "./components/NewUserForm";

export const GET_USER = gql`
  query {
    users {
      id
      name
    }
  }
`;

type IUser = {
  id: string;
  name: string;
};

function App() {
  const { loading, error, data } = useQuery<{ users: IUser[] }>(GET_USER);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error :</p>;
  }

  return (
    <div>
      <ul>
        {data?.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <NewUserForm />
    </div>
  );
}

export default App;
