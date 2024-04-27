import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server.mjs";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link, Routes, Route } from "react-router-dom";
function multiply(a, b) {
  return a * b;
}
function multiplyAndAdd(a, b, c) {
  return add(multiply(a, b), c);
}
function add(a, b) {
  return a + b;
}
function addAndMultiply(a, b, c) {
  return multiply(add(a, b), c);
}
const app = "";
function About() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "About" }),
    /* @__PURE__ */ jsx("h4", { className: "strClass", children: "inside change no.  21 express installed globally" }),
    /* @__PURE__ */ jsx("div", { children: addAndMultiply(1, 2, 3) }),
    /* @__PURE__ */ jsx("div", { children: multiplyAndAdd(1, 2, 3) }),
    "         ",
    /* @__PURE__ */ jsx("h4", { children: "above GetEntries" }),
    /* @__PURE__ */ jsx("h4", { children: "above GetEntries" }),
    /* @__PURE__ */ jsx(GetEntries, {}),
    /* @__PURE__ */ jsx("h4", { children: "below GetEntries" })
  ] });
}
const __vite_glob_0_0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: About
}, Symbol.toStringTag, { value: "Module" }));
function Env() {
  let msg = "default message here Env No1111 113:37";
  try {
    msg = process.env.MY_CUSTOM_SECRET || msg;
  } catch {
  }
  return /* @__PURE__ */ jsx("h1", { children: msg });
}
const __vite_glob_0_1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Env
}, Symbol.toStringTag, { value: "Module" }));
const url = "https://api.github.com/users";
const UseEffectFetchData = () => {
  console.log("in UseEffectFetchData pre getUsers");
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    console.log("in UseEffectFetchData in getUsers, pre fetch");
    const response = await fetch(url);
    const users2 = await response.json();
    console.log("in UseEffectFetchData in getUsers post fetch");
    setUsers(users2);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h3", { children: "github users" }),
    /* @__PURE__ */ jsx("ul", { className: "users", children: users.map((user) => {
      const { id, login, avatar_url, html_url } = user;
      return /* @__PURE__ */ jsxs("li", { children: [
        /* @__PURE__ */ jsx("img", { src: avatar_url, alt: login }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { children: login }),
          /* @__PURE__ */ jsx("a", { href: html_url, className: "strClass", children: "profile" })
        ] })
      ] }, id);
    }) })
  ] });
};
function Extra() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "Extra" }),
    /* @__PURE__ */ jsx(UseEffectFetchData, {}),
    /* @__PURE__ */ jsx("div", { children: addAndMultiply(1, 2, 3) }),
    /* @__PURE__ */ jsx("div", { children: multiplyAndAdd(1, 2, 3) })
  ] });
}
const __vite_glob_0_2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Extra
}, Symbol.toStringTag, { value: "Module" }));
function Home() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "vr12        Home          no 44      13:42    22/04/2024 " }),
    /* @__PURE__ */ jsx("div", { children: addAndMultiply(1, 2, 3) }),
    /* @__PURE__ */ jsx("div", { children: multiplyAndAdd(1, 2, 3) })
  ] });
}
const __vite_glob_0_3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Home
}, Symbol.toStringTag, { value: "Module" }));
function ToProxy() {
  const [data, setData] = useState();
  const [data2, setData2] = useState();
  const [data3, setData3] = useState();
  const [data4, setData4] = useState();
  const [data5, setData5] = useState();
  const urlProxy = "/apixx";
  const urlProxy2 = "/apixx/test99";
  const urlProxy3 = "/api/routes/test88";
  const urlProxy4 = "/opt/render/project/src/dist/server/message/entry-server/message";
  async function getData() {
    await axios.get(urlProxy, {
      headers: { "Content-Type": "application/json" }
    }).then((res) => setData(res.data)).catch((error) => {
      console.log("urlProxy = ,catch error = ", urlProxy, error);
    });
    await axios.get(urlProxy2, {
      headers: { "Content-Type": "application/json" }
    }).then((res) => setData2(res.data)).catch((error2) => {
      console.log("urlProxy2 = ,catch error2 = ", urlProxy2, error2);
    });
    await axios.get(urlProxy3, {
      headers: { "Content-Type": "application/json" }
    }).then((res) => setData3(res.data)).catch((error3) => {
      console.log("urlProxy3 = ,catch error3 = ", urlProxy3, error3);
    });
    await axios.get(urlProxy4, {
      headers: { "Content-Type": "application/json" }
    }).then((res) => setData4(res.data)).catch((error4) => {
      console.log("urlProxy3 = ,catch error3 = ", urlProxy4, error4);
    });
  }
  useEffect(() => {
    getData();
  }, []);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("h1", { children: "ToProxy   xxx" }),
    /* @__PURE__ */ jsx("h3", {}),
    /* @__PURE__ */ jsx("p", { children: ' No. 1 urlProxy   "/apixx" ' }),
    /* @__PURE__ */ jsxs("p", { children: [
      "data : ",
      data
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      "urlProxy : ",
      urlProxy
    ] }),
    /* @__PURE__ */ jsx("p", { children: "xxxxxxxxxxxxxxxxxxxxxxxxxxx" }),
    /* @__PURE__ */ jsx("p", { children: ' No 2 urlProxy2  test99   "/apixx/apixx" ' }),
    /* @__PURE__ */ jsxs("p", { children: [
      "data : ",
      data2
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      "urlProxy2: ",
      urlProxy2
    ] }),
    /* @__PURE__ */ jsx("p", { children: "xxxxxxxxxxxxxxxxxxxxxxxxxxx" }),
    /* @__PURE__ */ jsx("p", { children: ' No 3 urlProxy3  test88   "/api/router" ' }),
    /* @__PURE__ */ jsxs("p", { children: [
      "data : ",
      data3
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      "urlProxy3: ",
      urlProxy3
    ] }),
    /* @__PURE__ */ jsx("p", { children: "xxxxxxxxxxxxxxxxxxxxxxxxxxx" }),
    /* @__PURE__ */ jsx("p", { children: ' No 4 urlProxy4     "/message" ' }),
    /* @__PURE__ */ jsxs("p", { children: [
      "data : ",
      data4
    ] }),
    /* @__PURE__ */ jsxs("p", { children: [
      "urlProxy4: ",
      urlProxy4
    ] }),
    /* @__PURE__ */ jsx("p", { children: "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" }),
    /* @__PURE__ */ jsx("p", { children: " No 5    /message     from   apiax            " }),
    /* @__PURE__ */ jsxs("p", { children: [
      "data : ",
      data5
    ] }),
    /* @__PURE__ */ jsx("p", { children: "urlProxy5: no proxy  " })
  ] });
}
const __vite_glob_0_4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: ToProxy
}, Symbol.toStringTag, { value: "Module" }));
const pages = /* @__PURE__ */ Object.assign({ "./pages/About.jsx": __vite_glob_0_0, "./pages/Env.jsx": __vite_glob_0_1, "./pages/Extra.jsx": __vite_glob_0_2, "./pages/Home.jsx": __vite_glob_0_3, "./pages/ToProxy.jsx": __vite_glob_0_4 });
const routes = Object.keys(pages).map((path) => {
  const name = path.match(/\.\/pages\/(.*)\.jsx$/)[1];
  return {
    name,
    path: name === "Home" ? "/" : `/${name.toLowerCase()}`,
    component: pages[path].default
  };
});
function App() {
  console.log("in App pages = ", pages);
  console.log("in App routes = ", routes);
  const [Show, setShow] = useState(false);
  useEffect(() => {
    setShow(true);
  }, []);
  if (!Show) {
    return null;
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("nav", { children: /* @__PURE__ */ jsx("ul", { children: routes.map(({ name, path }) => {
      return /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: path, children: name }) }, path);
    }) }) }) }),
    /* @__PURE__ */ jsx(Routes, { children: routes.map(({ path, component: RouteComp }) => {
      console.log("RouteComp = ", RouteComp);
      return /* @__PURE__ */ jsx(Route, { path, element: /* @__PURE__ */ jsx(RouteComp, {}) }, path);
    }) })
  ] });
}
function render(url2, context) {
  console.log(" in entry-server, function render, url = ", url2);
  console.log("in entry-server, function render, context = ", context);
  console.log("in entry-server.....hydrated hydrated hydrated");
  return ReactDOMServer.renderToString(
    /* @__PURE__ */ jsx(StaticRouter, { location: url2, context, children: /* @__PURE__ */ jsx(App, {}) }),
    console.log("in entry-server 2.....hydrated hydrated hydrated")
  );
}
export {
  render
};
