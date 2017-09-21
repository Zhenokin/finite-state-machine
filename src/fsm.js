class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        this._config = config;
        this._state = config.initial;
        this.history = [];
        this.lastState;
    }

    /**
     * Returns active state.
     * @returns {String}
     */
    getState() {
        return this._state;
    }

    /**
     * Goes to specified state.
     * @param state
     */
    changeState(state) {
        if (state in this._config.states) {
            this.history.push(this._state);
            this._state = state;
        } else {
            throw new Error("state is not exist");
        }
    }

    /**
     * Changes state according to event transition rules.
     * @param event
     */
    trigger(event) {
        if (event in this._config.states[this._state].transitions) {
            this.history.push(this._state);
            this._state = this._config.states[this._state].transitions[event];

        } else {
            throw new Error("event isn't exist")
        }

    }

    /**
     * Resets FSM state to initial.
     */
    reset() {
        this._state = this._config.initial;
        this.history = [];
    }

    /**
     * Returns an array of states for which there are specified event transition rules.
     * Returns all states if argument is undefined.
     * @param event
     * @returns {Array}
     */
    getStates(event) {
        let i = 0;
        let statesEvent = [];
        if (event) {
            for (let el in this._config.states) {
                if (event in this._config.states[el].transitions) {
                    statesEvent[i] = el;
                    console.log(statesEvent);
                    i++;
                }
            }
        } else {
            for (let el in this._config.states) {
                statesEvent[i] = el;

                i++;
            }

        }
        return statesEvent;

    }

    /**
     * Goes back to previous state.
     * Returns false if undo is not available.
     * @returns {Boolean}
     */
    undo() {
        if (this.history.length) {
            this.lastState = this.history[this.history.length - 1];
            this._state = this.history.pop();
            return true;
        } else {
            return false;
        }
    }

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {
        if ()
            this.history.push[this.lastState];
    }

    /**
     * Clears transition history
     */
    clearHistory() {}
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/