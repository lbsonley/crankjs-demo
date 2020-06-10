/** @jsx createElement */
import { createElement, Fragment } from "@bikeshaving/crank";

function* Stateful() {
  let counter = 0;
  const interval = setInterval(() => {
    counter += 1;
    this.refresh();
  }, 5000);

  try {
    while (true) {
      yield (
        <Fragment>
          <p>This thing has been running for {counter} seconds.</p>
        </Fragment>
      );
    }
  } finally {
    clearInterval(interval);
  }
}

export default Stateful;
