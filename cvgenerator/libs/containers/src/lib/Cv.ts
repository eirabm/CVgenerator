class Cv {
        name:string = '';
        role:string = '';
        sumary: string = '';
        experience : Array<string> = []
        education : Array<string> = [];
        otherSkills : string = '';
        topSkills : Array<string> = [];

    constructor() {
        
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