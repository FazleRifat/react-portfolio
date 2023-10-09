import SkillCards from "./SkillCards/SkillCards";


const Skills = () => {
    return (
        <div id="/skills">
            <h3 className=" text-center text-5xl my-4 md:text-6xl font-semibold">Skills</h3>
            <div className="mt-3 ">
                <SkillCards></SkillCards>
            </div>
        </div>
    );
};

export default Skills;