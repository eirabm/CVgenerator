class Cv {
        name:string = '';
        role:string = '';
        sumary: string = '';
        experience : Array<string> = []
        education : Array<string> = [];
        otherSkills : string = '';
        topSkills : Array<string> = [];

    constructor({name, role, sumary, experience, education, otherSkills, topskills}:
        {
            name:string,
            role:string,
            sumary: string,
            experience : Array<string>,
            education : Array<string>,
            otherSkills : string,
            topskills : Array<string>,
        }) {
        this.name = name;
        this.role = role;
        this.sumary = sumary;
        this.experience = experience;
        this.education = education;
        this.otherSkills = otherSkills;
        this.topSkills = topskills;
    }
    headerSetter({name, role}:
        {
            name:string,
            role:string
        }) {
        this.name = name;
        this.role = role;
    };
    sumarySetter( sumary:string ){
        this.sumary = sumary
    };
    experienceSetter(exp:string[]){
        this.experience = exp;
    };
    educationSetter(education: string[]){
        this.education = education
    }
    oSkillsSetter(otherSkills: string){
        this.otherSkills = otherSkills
    }
    topSetter(topSkills: string[]){
        this.topSkills = topSkills
    }
}

export {Cv};