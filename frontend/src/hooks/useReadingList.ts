/* eslint-disable react-hooks/exhaustive-deps */
import { useQuery } from "@apollo/client";
import BookType from "../types/BookType";
import { GQL_BOOKS } from "../settings";
import { useCallback, useEffect, useState } from "react";
import toast from "react-hot-toast";

const STORAGE_KEY = "ELLO_READING_LIST";

const fetchList = () => {
  try {
    const item: any = window.localStorage.getItem(STORAGE_KEY);
    return item ? JSON.parse(item) : [];
  } catch (error) {
    console.log(error);
    return [];
  }
};

function useLocalStorage() {
  // Get the initial value from localStorage if it exists, otherwise use blank array
  const [readingList, setReadingList] = useState(fetchList());

  useEffect(() => {
    setReadingList(fetchList());
  }, []);

  // A function to update the state and localStorage
  const addBook = (book: BookType) => {
    // Merge book into current reading list
    let data = fetchList();
    data = [...data, book];

    setReadingList(data);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    toast.success(`${book.title} successfully added to the reading list`);
  };

  const removeBook = (book: BookType) => {
    // Merge book into current reading list
    let data = fetchList();
    data = data.filter((b: BookType) => b.title !== book.title);

    setReadingList(data);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));

    toast.success(`${book.title} successfully removed from the reading list`);
  };

  return [readingList, addBook, removeBook];
}

export default useLocalStorage;
