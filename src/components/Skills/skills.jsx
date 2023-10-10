import React from "react";
import datas from "../../datas/skills.json";

export default function Skills() {

    return (
        <section className="skills" id="Skills">
            <div className="row">
                <h2>Compétences</h2>
                <div className="skills__logos">
                    {datas.map(data => (
                        <div className="skills__logos__skill" key={data.id}>
                            <img
                                src={require(`../../assets/images/${data.logo}`)}
                                className="skills__logos__skill__logo"
                                alt={data.description}
                            />
                            <span>{data.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}