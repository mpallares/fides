import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Table } from "./Table";
import { User } from "../../utils/types";

const users: User[] = [
  {
    createdAt: "2022-12-14T23:34:11.445Z",
    firstName: "Maria",
    lastName: "Gleason",
    email: "Sonya78@gmail.com",
    longDescription: "24/7",
    address: "950",
    phone: "(761) 454-3394 x334",
    shortDescription: "Fundamental human-resource help-desk",
    id: "1",
    company: "matrix B2B action-items",
  },
];

test("should render Table component", () => {
  const onViewItemClick = () => {};
  const columns = ["test1", "test2"];
  const onDeleteItemClick = () => {};
  const onUpdateItemClick = () => {};

  const { getByText } = render(
    <Table
      columns={columns}
      data={users}
      onViewItemClick={onViewItemClick}
      onDeleteItemClick={onDeleteItemClick}
      onUpdateItemClick={onUpdateItemClick}
    />
  );

  expect(screen.getByText(users[0].id)).toBeInTheDocument();
});

test("should call view function on onViewItemClick", () => {
  const onViewItemClick = jest.fn();
  const columns = ["test1", "test2"];
  const onDeleteItemClick = () => {};
  const onUpdateItemClick = () => {};

  const { getByText } = render(
    <Table
      columns={columns}
      data={users}
      onViewItemClick={onViewItemClick}
      onDeleteItemClick={onDeleteItemClick}
      onUpdateItemClick={onUpdateItemClick}
    />
  );
  fireEvent.click(screen.getByText("View"));
  expect(onViewItemClick).toBeCalledWith(users[0].id);
});
test("should call view function on onDeleteItemClick", () => {
  const columns = ["test1", "test2"];
  const onDeleteItemClick = jest.fn();
  const onViewItemClick = () => {};
  const onUpdateItemClick = () => {};
  render(
    <Table
      columns={columns}
      data={users}
      onViewItemClick={onViewItemClick}
      onDeleteItemClick={onDeleteItemClick}
      onUpdateItemClick={onUpdateItemClick}
    />
  );
  fireEvent.click(screen.getByText("Delete"));
  expect(onDeleteItemClick).toBeCalledWith(users[0].id);
});
test("should call view function on onUpdateItemClick", () => {
  const onUpdateItemClick = jest.fn();
  const columns = ["test1", "test2"];

  const onViewItemClick = () => {};
  const onDeleteItemClick = () => {};
  render(
    <Table
      columns={columns}
      data={users}
      onViewItemClick={onViewItemClick}
      onDeleteItemClick={onDeleteItemClick}
      onUpdateItemClick={onUpdateItemClick}
    />
  );
  fireEvent.click(screen.getByText("Edit"));
  expect(onUpdateItemClick).toBeCalledWith(users[0].id);
});
