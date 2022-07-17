import path from "path";

exports.onCreatePage = ({ page, actions }: any) => {
  const { createPage } = actions;
  if (page.path === `/`) {
    page.matchPath = `/*`;
    createPage(page);
  }
};
