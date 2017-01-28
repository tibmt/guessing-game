class GuessingGame {
    constructor() {
        
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
       
       let result;
       result = Math.round((this.min + this.max) / 2);

       this.solutionCandidate = result;
       return result;
    }
    
    lower() {
        this.max = this.solutionCandidate;
    }

    greater() {
        this.min = this.solutionCandidate;
    }
}

module.exports = GuessingGame;
