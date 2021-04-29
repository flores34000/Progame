import 'bootstrap';
import '../sass/style.scss';
import {routes} from './routes';
import {home} from './home';
import {pageDetail} from './pageDetail';
import {pageList} from './pageList';

let pageArgument;

const setRoute = () => {
  let path = window.location.hash.substring(1).split("/");
  pageArgument = path[1] || "";
  var pageContent = document.getElementById("pageContent");
  routes[path[0]](pageArgument);
  return true;
};

window.addEventListener("hashchange", () => setRoute());
window.addEventListener("DOMContentLoaded", () => setRoute());

