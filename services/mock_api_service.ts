const I = actor();

export class MockApiService {

    programs: any;
    response: any;

    async getPrograms() {
        this.response = await I.sendGetRequest('/dev/api/programs/', {});
    }

    async postProgram(programId: string) {
        this.response = await I.sendPostRequest('/dev/api/programs/', programId, {});
    }

    async deleteProgram() {
        this.response = await I.sendDeleteRequest('/dev/api/programs/', {});
    }

    updateProgramsFromResponse() {
        if (this.response.status === 200){
            this.programs = this.response.data;
        }
    }

    programExists(programId: string){
        return !!this.programs.find(program => program.id === programId);
    }
}