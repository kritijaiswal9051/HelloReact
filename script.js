const container = React.createElement("div", { className: "container" }, [
  React.createElement("section", { key: 1 }, [
    React.createElement("p", { key: 2 }, "my first react"),
    React.createElement("img", {
      key: 3,
      style: { width: "100px" },
      src: "https://th.bing.com/th/id/OIP.IoCLrnfGa9GzPimOovQyDgHaGc?rs=1&pid=ImgDetMain",
    }),
  ]),
  React.createElement("section", { key: 9 }, [
    React.createElement("p", { key: 2 }, "Amazing"),
    React.createElement("form", { key: 3 }, [
      React.createElement("div", { className: "inputField" }, [
        React.createElement("label", { key: 3, htmlFor: "user" }, "userName"),
        React.createElement("input", { key: 4, id: "user" }),
      ]),
    ]),
  ]),
]);

// const root = ReactDOM.createRoot(document.getElementById("root"));
const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(container);
