const Person = props => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.occupation)
  ])
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { class: "title" }, "React IS rendered"),
    React.createElement(Person,
      { name: "Omer", occupation: "Engineer" }, null),
    React.createElement(Person,
      { name: "Semra", occupation: "House Wife" }, null),
    React.createElement(Person,
      { name: "Meryem", occupation: "Karamel" }, null)
  ]);
};

const container = document.getElementById("root");

//ReactDOM.render(React.createElement(App), container);

const root = ReactDOM.createRoot(container);

root.render(React.createElement(App));