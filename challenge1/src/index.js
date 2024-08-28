import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./styles.css";

const skills = [
    {
        skill: "HTML+CSS",
        level: "advanced",
        color: "#2662EA"
    },
    {
        skill: "JavaScript",
        level: "advanced",
        color: "#EFD81D"
    },
    {
        skill: "Web Design",
        level: "advanced",
        color: "#C3DCAF"
    },
    {
        skill: "Git and GitHub",
        level: "intermediate",
        color: "#E84F33"
    },
    {
        skill: "React",
        level: "advanced",
        color: "#60DAFB"
    },
    {
        skill: "Svelte",
        level: "beginner",
        color: "#FF3B00"
    }
];

function App() {
    return (
        <div className="card">
            <Avatar image="pizzas/funghi.jpg"/>
            <div className="data">
                <Intro/>
                {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
                <SkillList/>
            </div>
        </div>
    );
}

function Avatar(props) {
    return <img className="avatar" src={props.image} alt="userImage"/>;
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
            {skills.map(skill => <Skill skill={skill.skill} color={skill.color} level={skill.level}/>)}
        </div>
    );
}

function Skill({skill, color, level}) {
    return (
        <div className="skill" style={{backgroundColor: color}}>
            <span>{skill}</span>
            <span>{level === "beginner" && '❤️'}</span>
            <span>{level === "intermediate" && '😒'}</span>
            <span>{level === "advanced" && '🙌'}</span>
        </div>
    );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
    <StrictMode>
        <App/>
    </StrictMode>
);
