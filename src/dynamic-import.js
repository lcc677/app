async function getStrings() {
  const { default: _ } = await import(
    /* webpackChunkName: "vendors-loadsh",webpackPreload: true */
    'loadsh'
  );
  console.log(_.join(['hello', 'dynamic', 'import'], ' '));
}
// getStrings()
export default getStrings;
