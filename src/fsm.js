class FSM {
    /**
     * Creates new FSM instance.
     * @param config
     */
    constructor(config) {
        this._config = config;
        this._state = config.initial;
        this.history = [];
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
    undo() {}

    /**
     * Goes redo to state.
     * Returns false if redo is not available.
     * @returns {Boolean}
     */
    redo() {}

    /**
     * Clears transition history
     */
    clearHistory() {}
}

module.exports = FSM;

/** @Created by Uladzimir Halushka **/