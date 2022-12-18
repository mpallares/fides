import React, { useState } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { addUser } from "../../redux/userSlice";
import { Project } from "../../utils/types";
import styles from "./CreateForm.module.css";

interface CreateFormProps {
  setShowModal: (open: boolean) => void;
}

export const CreateForm = ({ setShowModal }: CreateFormProps) => {
  const dispatch = useAppDispatch();

  const [projects, setProjects] = useState<Project[]>([]);
  const [singleProject, setSingleProject] = useState({
    city: "",
    description: "",
    phone: "",
  });
  const [user, setUser] = useState({
    createdAt: "",
    firstName: "",
    lastName: "",
    email: "",
    longDescription: "",
    company: "",
    address: "",
    phone: "",
    shortDescription: "",
    id: "",
  });

  const handleChange = (inputName: keyof typeof user, value: string) => {
    setUser({
      ...user,
      [inputName]: value,
    });
  };
  const handleChangeProjects = (
    inputName: keyof typeof singleProject,
    value: string
  ) => {
    setSingleProject({
      ...singleProject,
      [inputName]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<EventTarget>) => {
    e.preventDefault();
    const newUser = {
      ...user,
      projects,
    };
    dispatch(addUser(newUser));
    setShowModal(false);
  };

  const onAddProject = () => {
    if (
      singleProject.city &&
      singleProject.description &&
      singleProject.phone
    ) {
      setProjects([...projects, singleProject]);
      setSingleProject({ city: "", description: "", phone: "" });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create Client</h1>
      <input
        className={styles.inputText}
        type="text"
        name="id"
        placeholder="ID"
        onChange={(e) => handleChange("id", e.target.value)}
        value={user.id}
      />
      <input
        className={styles.inputText}
        type="text"
        name="createdAt"
        placeholder="Created At"
        onChange={(e) => handleChange("createdAt", e.target.value)}
        value={user.createdAt}
      />
      <input
        className={styles.inputText}
        type="text"
        name="company"
        placeholder="company"
        onChange={(e) => handleChange("company", e.target.value)}
        value={user.company}
      />
      <input
        className={styles.inputText}
        type="text"
        name="firstName"
        placeholder="First Name"
        onChange={(e) => handleChange("firstName", e.target.value)}
        value={user.firstName}
      />
      <input
        className={styles.inputText}
        type="text"
        name="address"
        placeholder="Address"
        onChange={(e) => handleChange("address", e.target.value)}
        value={user.address}
      />
      <input
        className={styles.inputText}
        type="text"
        name="email"
        placeholder="email"
        onChange={(e) => handleChange("email", e.target.value)}
        value={user.email}
      />
      <input
        className={styles.inputText}
        type="text"
        name="phone"
        placeholder="phone"
        onChange={(e) => handleChange("phone", e.target.value)}
        value={user.phone}
      />
      <textarea
        className={styles.inputText}
        name="shortDescription"
        placeholder="short description"
        onChange={(e) => handleChange("shortDescription", e.target.value)}
        value={user.shortDescription}
      ></textarea>
      <textarea
        className={styles.inputText}
        name="longDescription"
        placeholder="long description"
        onChange={(e) => handleChange("longDescription", e.target.value)}
        value={user.longDescription}
      ></textarea>

      <div>
        <h4>Projects</h4>
        <input
          className={styles.inputText}
          type="text"
          name="city"
          placeholder="name"
          onChange={(e) => handleChangeProjects("city", e.target.value)}
          value={singleProject.city}
        />
        <input
          className={styles.inputText}
          type="text"
          name="description"
          placeholder="contact"
          onChange={(e) => handleChangeProjects("description", e.target.value)}
          value={singleProject.description}
        />
        <input
          className={styles.inputText}
          type="text"
          name="phone"
          placeholder="phone"
          onChange={(e) => handleChangeProjects("phone", e.target.value)}
          value={singleProject.phone}
        />
        <button
          className={styles.buttonProject}
          type="button"
          onClick={() => onAddProject()}
        >
          Add New Project
        </button>
        <div>
          {projects.map((project, i) => (
            <div key={i} className={styles.newProject}>
              <p>city: {project.city}</p>
              <p>description: {project.description}</p>
              <p>phone: {project.phone}</p>
            </div>
          ))}
        </div>
      </div>
      <button className={styles.createButton} type="submit">
        Create
      </button>
    </form>
  );
};
