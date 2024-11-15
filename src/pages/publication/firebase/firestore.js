import { useState, useEffect } from "react";
import { db } from "../../../configuration";
import { collection, getDocs, addDoc } from "@firebase/firestore";
function Firestore() {
  const UsersCollectionRef = collection(db, "123");
  const data = { name: "shiva", id: 2 };
  const clickHandler = async () => {
    try {
      const docRef = await addDoc(UsersCollectionRef, {
        data,
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };
  useEffect(() => {
    const getUsersData = async () => {
      const data = await getDocs(UsersCollectionRef);
      console.log("data ", data.docs);
    };

    getUsersData();
  }, []);
  return (
    <>
      <h1>Data from firestore</h1>
      <button onClick={clickHandler}>click</button>
    </>
  );
}

export default Firestore;
