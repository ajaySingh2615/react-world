import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar image="pizzas/funghi.jpg" />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <img className="avatar" src={props.image} alt="userImage" />;
}
function Intro() {
  return (
    <div>
      <h1>Pizza</h1>
      <p>
        Pizza is a delicious dish made with a dough base, topped with tomato
        sauce, cheese, and various toppings like veggies or meat. It's baked
        until the crust is crispy and the cheese is melted and bubbly!
      </p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill Skill="React" emoji="🙌" color="#12345" />
      <Skill Skill="Java" emoji="😍" color="red" />
      <Skill Skill="Python" emoji="😒" color="yellow" />
      <Skill Skill="JavaScript" emoji="❤️" color="blue" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.Skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
