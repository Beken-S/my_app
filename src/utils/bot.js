const TimeoutBot = {
  setup(doSomething, timeout) {
    if (typeof this.timeoutId === 'number') {
      this._cancel();
    }
    this.timeoutId = setTimeout(
      () => this._action(doSomething),
      timeout,
      doSomething
    );
  },
  _action(doSomething) {
    doSomething();
    this.timeoutId = undefined;
  },
  _cancel() {
    clearTimeout(this.timeoutId);
  },
};

export { TimeoutBot };
