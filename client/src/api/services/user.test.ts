import { getUsers, deleteUser, getUser, updateUser } from "./user";

describe("Mock Api Tests", () => {
  test("should get users", async () => {
    const log = await getUsers();

    expect(log.length).toBeGreaterThan(1);
  });

  test("should delete users", async () => {
    const users = await getUsers();

    const userToDelete = users[users.length - 1];

    const deleteCall = await deleteUser(userToDelete.id);

    expect(deleteCall).toBeTruthy();
  });

  test("should get user", async () => {
    const users = await getUsers();

    const singleUser = users[users.length - 1];

    const selectedUser = await getUser(singleUser.id);

    expect(singleUser).toEqual(selectedUser);
  });
  test("should update user", async () => {
    const users = await getUsers();

    const singleUser = users[users.length - 1];

    const selectedUser = await getUser(singleUser.id);

    console.log("original user", selectedUser);

    selectedUser.firstName = "Maria";
    const updatedUser = await updateUser(selectedUser.id, selectedUser);
    expect(updatedUser).toEqual(selectedUser);
  });
  test("should create new user", async () => {
    const users = await getUsers();
    const newUser = {
      firstName: "Maria",
    };

    const newUsersArr = [...users, newUser];
    expect(newUsersArr.length).toBeGreaterThan(users.length);
  });
});
