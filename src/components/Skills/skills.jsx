import React, { useState, useEffect } from "react";
import datas from "../../datas/skills.json";
import { useInView } from "react-intersection-observer";

export default function Skills() {
    const [ref, inView] = useInView({ triggerOnce: false });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (inView && !isVisible) {
            setIsVisible(true);
        }
    }, [inView, isVisible]);

    return (
        <section className="skills" id="Skills">
            <div className="row">
                <h2>Compétences</h2>
                <div className="skills__logos">
                    {datas.map((data) => (
                        <div className="skills__logos__skill" key={data.id} ref={ref}>
                            <img
                                src={require(`../../assets/images/${data.logo}`)}
                                className={`skills__logos__skill__logo ${inView ? 'show' : 'hidden'}`}
                                alt={data.description}
                                style={{ transitionDelay: `${data.id * .3}s` }}
                            />
                            <span>{data.title}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}