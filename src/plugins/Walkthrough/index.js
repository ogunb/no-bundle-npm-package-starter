import Shepherd from 'shepherd.js';
import '../../styles/walkthrough.scss';

const steps = new Map();
const saveStep = ({ group, index = null, step }) => {
  const stepList = [...(steps.get(group) || [])];

  if (index != null) {
    stepList.splice(index, 0, step);
  } else {
    stepList.push(step);
  }

  steps.set(group, stepList);
};

const createWalkthrough = (options = {}) => {
  const walkthrough = new Shepherd.Tour({
    useModalOverlay: true,
    exitOnEsc: true,
    ...options,
    defaultStepOptions: {
      scrollTo: true,
      ...(options.defaultStepOptions || {}),
    },
    popperOptions: {
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [10, 20],
          },
        },
      ],
      ...(options.popperOptions || {}),
    },

    classPrefix: 'baklava-walkthrough',
  });

  if (options.exitOnClickOutside !== false) {
    // wait for render;
    setTimeout(() => {
      document
        .querySelector('.shepherd-modal-overlay-container')
        .addEventListener('click', () => {
          walkthrough.complete();
        });
    });
  }

  return walkthrough;
};

/**
 * Vue2 plugin
 * https://shepherdjs.dev/docs/
 * @constructor
 */
export const Walkthrough = {
  async install (Vue) {
    Vue.directive('walkthrough-step', {
      bind (el, { value: { popover, index, group, on = 'auto' } }) {
        const step = {
          ...popover,
          attachTo: {
            element: el,
            on,
          },
        };

        saveStep({ group, index, step });
      },
    });

    Vue.prototype.$walkthrough = {
      highlight (highlight, options = {}) {
        const walkthrough = createWalkthrough(options);

        Vue.nextTick(() => {
          walkthrough.addStep(highlight);
          walkthrough.start();
        });

        return walkthrough;
      },

      start (group, { options = {}, index = 0 } = {}) {
        const walkthrough = createWalkthrough(options);

        Vue.nextTick(() => {
          const stepList = steps.get(group);

          walkthrough.addSteps(stepList);
          walkthrough.start(index);
        });

        return walkthrough;
      },
    };
  },
};
