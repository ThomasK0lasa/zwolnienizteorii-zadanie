// JavaScript router in 20 lines
// Joakim Carlstein - https://joakim.beng.se/
import { engine } from './engine';
let el = null;
let events = [];
const routes = {};

 /**
  * @param path URL path
  * @param templatePath path to template inside 'pages' folder
  * @param controller data controller
  */
export const route = (path, templatePath, controller) => {
  let refresh;
  controller.prototype.$on = (selector, evt, handler) => events.push([selector, evt, handler]);
  controller.prototype.$refresh = () => refresh()
  routes[path] = {
    templatePath: templatePath,
    controller: controller,
    // onRefresh: listeners.push.bind(listeners) this solution leads to memory leak
    onRefresh: (fn) => { refresh = fn; } // this solution is sufficient for current assignment
  };
};

const forEachEvent = fnName => {
  for (let i = 0; i < events.length; i++) {
    const els = el.querySelectorAll(events[i][0]);
    for (let j = 0; j < els.length; j++) {
      els[j][fnName].apply(els[j], events[i].slice(1));
    }
  }
};

const router = () => {
  // Lazy load view element:
  el = el || document.getElementById('app');
  // Remove current event listeners:
  forEachEvent('removeEventListener');
  // Clear events, to prepare for next render:
  events = [];
  // Current route url (getting rid of '#' in hash as well):
  const url = location.hash.slice(1) || '/';
  // Get route by url or fallback if it does not exist:
  const route = routes[url] || routes['*'];
  if (route && route.controller) {
    const ctrl = new route.controller();
    // Listen on route refreshes:
    route.onRefresh(() => {
      forEachEvent('removeEventListener');
      // Render route template with John Resig's template engine:
      el.innerHTML = engine(route.templatePath, ctrl);
      forEachEvent('addEventListener');
    });
    // Trigger the first refresh:
    ctrl.$refresh();
  }
};

window.addEventListener('hashchange', router);
window.addEventListener('load', router);