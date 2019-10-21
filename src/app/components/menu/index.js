import React from "react";
import { push } from "redux-first-routing";
import { connect } from "react-redux";

import MenuHeader from "./header";
import MenuFooter, { Entry } from "./footer";
import images from "../../resources/images";

const mapStateToProps = ({
  state: {
    routes,
    user: { language }
  },
  router
}) => ({ routes, language, router });
const mapDispatchToProps = dispatch => ({
  changePath: path => dispatch(push(path))
});

function Menu({ routes, language, router, changePath }) {
  const path = {
    list: `/${language}/${routes[language].list}`,
    graph: `/${language}/${routes[language].graph}`,
    recipes: `/${language}/${routes[language].recipes}`
  };
  return [
    <MenuHeader
      {...{
        key: "header",
        title: "GROCERIES APP",
        image: { src: images.menu.grocery, alt: "grocery" },
        changePath
      }}
    />,
    <MenuFooter {...{ key: "footer", changePath }}>
      <Entry
        title="List"
        image={{
          src: <images.interactive.menu.List />,
          alt: "list"
        }}
        enabled={router.pathname.includes(path.list)}
        href={path.list}
      />
      <Entry
        title="stats"
        image={{
          src: <images.interactive.menu.Stats />,
          alt: "stats"
        }}
        enabled={router.pathname.includes(path.graph)}
        href={path.graph}
      />
      <Entry
        title="Recipes"
        image={{
          src: <images.interactive.menu.Fork />,
          alt: "fork"
        }}
        enabled={router.pathname.includes(path.recipes)}
        href={path.recipes}
      />
    </MenuFooter>
  ];
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Menu);
