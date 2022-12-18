import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { User } from "../../utils/types";
import styles from "./UserDetails.module.css";

interface UserDetailsProps {
  userId: string;
}

export const UserDetails = ({ userId }: UserDetailsProps) => {
  const [user, setUser] = useState<User>();
  const users = useAppSelector((state) => state.user.value);

  useEffect(() => {
    (async () => {
      try {
        const filteredUser = users.filter((user) => {
          return user.id === userId;
        });
        setUser(filteredUser[0]);
      } catch (err) {
        console.log(err);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h2>User Details</h2>
      <p>
        <b>Id: </b> {user?.id}
      </p>
      <p>
        <b>Created At: </b> {user?.createdAt}
      </p>
      <p>
        <b>Company: </b> {user?.company}
      </p>
      <p>
        <b>Name: </b> {user?.firstName}
      </p>
      <p>
        <b>Surname: </b> {user?.lastName}
      </p>
      <p>
        <b>Phone: </b> {user?.phone}
      </p>
      <p>
        <b>Briefing: </b> {user?.shortDescription}
      </p>
      <p>
        <b>Description: </b> {user?.longDescription}
      </p>
      <p style={{ marginBottom: "40px" }}></p>
      <p>
        <b>Projects: </b>{" "}
      </p>
      {user?.projects
        ? user?.projects.map((project, index) => {
            return (
              <div key={project.phone}>
                <p>
                  <b>City </b> {project.city}
                </p>
                <p>
                  <b>Description: </b> {project.description}
                </p>
                <p>
                  <b>Contact: </b> {project.phone}
                </p>
                {user?.projects?.length ? (
                  index !== user?.projects?.length - 1
                ) : null ? (
                  <hr className={styles.divider}></hr>
                ) : null}
              </div>
            );
          })
        : null}
    </>
  );
};
