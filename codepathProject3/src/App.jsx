import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const toastSuccess = () => toast.success("You are Correct!!!!");
  const toastIncorrect = () => toast.error("Wrong, please try again!");
  const [guess, setGuess] = useState("");

  const flashcards = [
    {
      title: "Array",
      description:
        "Elements in memory are arranged in continuous memory. All the elements are of the same type. And, the type of elements that can be stored in the form of this data structure is determined by the programming language. (List in Python)",
      image: "./src/assets/array.png",
    },
    {
      title: "Tuple",
      description:
        "Same as lists with the exception that the data once entered into the data structure cannot be changed no matter what. The only exception is when the data inside the data structure is mutable, only then the data structure data can be changed. ",
      image: "./src/assets/tuple.png",
    },
    {
      title: "Stack",
      description:
        "In this data structure, elements are stored in the LIFO principle. That is, the last element stored in this data structure will be removed first.",
      image: "./src/assets/stack.png",
    },
    {
      title: "Queue",
      description:
        "This data structure works in the FIFO principle where first element stored in the data structure will be removed first.",
      image: "./src/assets/queue.png",
    },
    {
      title: "String",
      description: "A collection of alphabets, words or other characters. ",
      image: "./src/assets/string.png",
    },
    {
      title: "Hashmap",
      description:
        "A common data structure used to store key-value pairs for efficient retrieval. A value stored in this data structure is retrieved using the key under which it was stored. (Dictionary in Python)",
      image: "./src/assets/hashmap.png",
    },
    {
      title: "Set",
      description:
        "A collection of unordered elements that are unique. It is a collection which is unordered, unchangeable, and unindexed.",
      image: "./src/assets/set.png",
    },
    {
      title: "Linked List",
      description:
        "In this data structure, data elements are connected through a series of nodes. And, each node contains the data items and address to the next node.",
      image: "./src/assets/linkedlist.png",
    },
    {
      title: "Tree",
      description:
        "Similar to a graph, this data structure is also a collection of vertices and edges. However, in this data structure, there can only be one edge between two vertices.",
      image: "./src/assets/tree.png",
    },
    {
      title: "Graph",
      description:
        "In this data structure, each node is called vertex and each vertex is connected to other vertices through edges.",
      image: "./src/assets/graph.png",
    },
  ];

  function clearInput() {
    let input = document.getElementById("guess");
    input.value = "";
  }

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  function increaseIndex() {
    setIndex(() => {
      return index + 1;
    });
    clearInput();
  }

  function decreaseIndex() {
    setIndex(() => {
      return index - 1;
    });
    clearInput();
  }

  function resetIndex() {
    setIndex(() => {
      return 0;
    });
    clearInput();
  }

  function checkAnswer() {
    if (guess == flashcards[index].title) {
      toastSuccess();
    } else {
      toastIncorrect();
    }
  }

  return (
    <div className="App">
      <Header />

      <div>
        <div
          className={`indexCard-container ${flipped ? "flipped" : ""}`}
          onClick={handleFlip}
        >
          <div className="frontCard">
            <h1>{flashcards[index].title}</h1>
          </div>

          <div className="backCard">
            <p>{flashcards[index].description}</p>
            <img src={flashcards[index].image} width="80%" />
          </div>
        </div>
      </div>

      <div className="answerContainer">
        <input
          className="guessInput"
          id="guess"
          placeholder="Guess Answer Here!"
          onChange={(e) => setGuess(e.target.value)}
        ></input>
        <button className="guessButton" onClick={checkAnswer}>
          Submit
        </button>
      </div>

      <div className="traverse">
        <button
          className={index == 0 ? "back hidden" : "back"}
          onClick={index == 0 ? "" : decreaseIndex}
        >
          Prev
        </button>
        {index == flashcards.length - 1 ? (
          <button onClick={resetIndex}>Restart</button>
        ) : (
          <button onClick={increaseIndex}>Next</button>
        )}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default App;
